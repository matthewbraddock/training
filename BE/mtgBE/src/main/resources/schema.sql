CREATE TABLE  if not exists mtg_cards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    type VARCHAR(50),
    rarity VARCHAR(50),
    mana_cost VARCHAR(50),
    power VARCHAR(10),
    toughness VARCHAR(10)
);

INSERT INTO mtg_cards (name, type, rarity, mana_cost, power, toughness) VALUES
('Black Lotus', 'Artifact', 'Rare', '0', '', ''),
('Mox Pearl', 'Artifact', 'Rare', '0', '', ''),
('Shivan Dragon', 'Creature', 'Rare', '4RR', '5', '5'),
('Dark Ritual', 'Instant', 'Common', 'B', '', ''),
('Counterspell', 'Instant', 'Common', 'UU', '', ''),
('Lightning Bolt', 'Instant', 'Common', 'R', '', ''),
('Swords to Plowshares', 'Instant', 'Uncommon', 'W', '', ''),
('Birds of Paradise', 'Creature', 'Rare', 'G', '0', '1'),
('Solemn Simulacrum', 'Artifact Creature', 'Rare', '4', '2', '2');