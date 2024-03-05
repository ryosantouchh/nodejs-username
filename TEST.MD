1.1

```ts
enum Gender {
  Male = 'male',
  FEMALE = 'female',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say',
}

type User = {
  id: number
  firstName: string
  lastName: string
  gender: Gender
  birthDate: string | Date
  image: string
}

const users: Array<User> = [
  {
    id: 1,
    firstName: 'Somsak',
    lastName: 'Deemak',
    gender: 'male',
    birthDate: '2000-06-13T00:00:00.000Z',
    image: 'data:image/png;base64...',
  },
  {
    id: 2,
    firstName: 'Manee',
    lastName: 'DeeDee',
    gender: 'female',
    birthDate: '2001-01-21T00:00:00.000Z',
    image: 'data:image/png;base64...',
  },
]
```

4.1.

```
SELECT * FROM STORE WHERE REGION = 'East';
```

4.2.

```
SELECT p.*
FROM PRODUCT p
JOIN SALES_FACT sf ON p.product_key = sf.product_key
JOIN STORE s ON sf.store_key = s.store_key
WHERE s.city = 'New York';
```

4.3

```
SELECT SUM(sf.profit)
FROM SALES_FACT sf
JOIN STORE s ON sf.store_key = s.store_key
WHERE s.city = 'New York';

```

4.4

```
DELETE FROM SALES_FACT
WHERE product_key IN (
	SELECT product_key
  FROM product
  WHERE brand = 'Wolf'
);
```

4.5

```
UPDATE PRODUCT
SET brand = 'W'
WHERE description = 'Toy Story';

```
