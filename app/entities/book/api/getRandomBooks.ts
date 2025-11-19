const subjects = [
    "classics",
    "animals",
    "anthropomorphism",
    "children",
    "croquet",
    "curiosidad",
    "curiosity",
    "english",
    "fantasy",
    "fiction",
    "friendship",
    "girls",
    "hookahs",
    "humor",
    "illustrations",
    "legends",
    "logic",
    "novela",
    "rabbits",
    "readers",
    "tea",
    "texts",
    "fantastique",
    "enfants",
    "crocheting",
    "imagination",
    "dreams",
    "theft",
    "courts",
    "tribunaux",
    "fantasmes",
    "dinosaurier",
    "urtidsdjur",
    "forntiden",
    "geologi",
    "evolution",
    "jorden",
    "history",
    "north",
    "shorthand",
    "gregg",
    "erwachsenwerden",
    "kultur",
    "logik",
    "philosophie",
    "reise",
    "sprache",
    "traumland",
];

export async function getRandomBooks() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];

    const meta = await fetch(`/openlibrary/subjects/${subject}.json?limit=1`).then(r => r.json());
    const booksInTotal = meta.work_count;
    const offset = Math.floor(Math.random() * (booksInTotal - 3));

    const res = await fetch(`/openlibrary/subjects/${subject}.json?limit=3&offset=${offset}`);

    const data = await res.json();

    return data.works;
}