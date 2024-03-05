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
