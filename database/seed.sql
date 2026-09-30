INSERT INTO categories (name)
VALUES
    ('Motivation'),
    ('Sad'),
    ('Happy'),
    ('Loving');
   
INSERT INTO quotes (text, author, category_id)
VALUES
    -- Motivation
    ('The only way to do great work is to love what you do.', 'Steve Jobs',
        (SELECT id FROM categories WHERE name = 'Motivation')),

    ('Success is not final, failure is not fatal: it is the courage to continue that counts.', 'Winston Churchill',
        (SELECT id FROM categories WHERE name = 'Motivation')),

    ('It always seems impossible until it is done.', 'Nelson Mandela',
        (SELECT id FROM categories WHERE name = 'Motivation')),

    ('Believe you can and you are halfway there.', 'Theodore Roosevelt',
        (SELECT id FROM categories WHERE name = 'Motivation')),

    ('The future depends on what you do today.', 'Mahatma Gandhi',
        (SELECT id FROM categories WHERE name = 'Motivation')),

    -- Sad
    ('The walls we build around us to keep sadness out also keep out the joy.', 'Jim Rohn',
        (SELECT id FROM categories WHERE name = 'Sad')),

    ('Tears come from the heart and not from the brain.', 'Leonardo da Vinci',
        (SELECT id FROM categories WHERE name = 'Sad')),

    ('Every human walks around with the kind of sadness that is all their own.', 'Unknown',
        (SELECT id FROM categories WHERE name = 'Sad')),

    ('Sadness flies away on the wings of time.', 'Jean de La Fontaine',
        (SELECT id FROM categories WHERE name = 'Sad')),

    ('Heavy hearts, like heavy clouds in the sky, are best relieved by letting a little water out.', 'Christopher Morley',
        (SELECT id FROM categories WHERE name = 'Sad')),

    -- Happy
    ('Happiness depends upon ourselves.', 'Aristotle',
        (SELECT id FROM categories WHERE name = 'Happy')),

    ('The purpose of our lives is to be happy.', 'Dalai Lama',
        (SELECT id FROM categories WHERE name = 'Happy')),

    ('Count your age by friends, not years. Count your life by smiles, not tears.', 'John Lennon',
        (SELECT id FROM categories WHERE name = 'Happy')),

    ('Happiness is not something ready made. It comes from your own actions.', 'Dalai Lama',
        (SELECT id FROM categories WHERE name = 'Happy')),

    ('A joyful life is made up of joyful moments strung together.', 'Jonathan Haidt',
        (SELECT id FROM categories WHERE name = 'Happy')),

    -- Loving
    ('Where there is love there is life.', 'Mahatma Gandhi',
        (SELECT id FROM categories WHERE name = 'Loving')),

    ('Love is composed of a single soul inhabiting two bodies.', 'Aristotle',
        (SELECT id FROM categories WHERE name = 'Loving')),

    ('The best thing to hold onto in life is each other.', 'Audrey Hepburn',
        (SELECT id FROM categories WHERE name = 'Loving')),

    ('We are most alive when we are in love.', 'John Updike',
        (SELECT id FROM categories WHERE name = 'Loving')),

    ('Love recognizes no barriers.', 'Maya Angelou',
        (SELECT id FROM categories WHERE name = 'Loving'));


INSERT INTO daily_quotes (date, quote_id)
VALUES (
    CURRENT_DATE,
    (SELECT id FROM quotes WHERE text = 'It always seems impossible until it is done.')
);