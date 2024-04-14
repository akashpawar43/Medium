import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createblogInput, updateblogInput } from "@akkipawar/medium-common";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        authorId: string
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
            c.set('authorId', payload.id)
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
            error: "You are not Logged in"
        })
    }
});

blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const { success } = createblogInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Enter valid Inputs"
            });
        }
        const authorId = c.get('authorId');
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
        const { success } = updateblogInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Enter valid Inputs"
            });
        }
        const authorId = c.get('authorId');
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
        const blog = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
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
            },
            select: {
                id: true,
                title: true,
                content: true,
                authorId: true,
                published: true,
                author: {
                    select: {
                        name: true
                    }
                }
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

