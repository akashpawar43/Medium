import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>



blogRouter.use(async (c, next) => {
    try {
        const header = c.req.header('Authorization');
        if (!header) {
            c.status(401)
            return c.json({
                message: "Unauthorized access!"
            });
        }
        const token = header.split(" ")[1];
        const payload = await verify(token, c.env.JWT_SECRET);
        if (payload) {
            c.set('userId', payload.id)
            await next();
        } else {
            c.status(401)
            return c.json({
                message: "Unauthorized access!"
            });
        }
    } catch (error) {
        c.status(500);
        return c.json({
            error: "Internal server error"
        })
    }
});

blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const authorId = c.get('userId');
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        return c.json({
            id: blog
        })
    } catch (error) {
        c.status(411);
        c.json({
            message: "Internal Server error"
        })
    }
});

blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const authorId = c.get('userId');
        const blog = await prisma.post.update({
            where: {
                id: body.id,
                authorId: authorId
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            blog: blog
        })
    } catch (error) {
        c.status(411);
        c.json({
            message: "Internal Server error"
        })
    }
});

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.post.findMany();
        return c.json({
            blog: blog
        })
    } catch (error) {
        c.status(411);
        c.json({
            message: "error while fetching blog post"
        })
    }
});

blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: c.req.param('id')
            }
        })
        return c.json({
            blog: blog
        })
    } catch (error) {
        c.status(411);
        c.json({
            message: "error while fetching blog post"
        })
    }
});

