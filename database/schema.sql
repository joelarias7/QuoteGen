CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE quotes(
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    category_id INTEGER NOT NULL,

    CONSTRAINT fk_quotes_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
);

CREATE TABLE daily_quotes(  
    date DATE PRIMARY KEY,
    quote_id INTEGER NOT NULL,
    

    CONSTRAINT fk_daily_quote
        FOREIGN KEY (quote_id)
        REFERENCES quotes(id)
);