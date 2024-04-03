```
npm install
npm run dev
```

```
npm run deploy
```


# installing prisma
```
npm i prisma
```

# initializing prisma 
```
npx prisma init
```

# migrating prisma model
```
npx prisma migrate dev --name init_schema
```

## Genrating Client
# its for normal node add
```
npx prisma generate
```

# its for cloudflare / serverless backends
```
npx prisma generate --no-engine
```

```
npm i @prisma/extension-accelerate
```