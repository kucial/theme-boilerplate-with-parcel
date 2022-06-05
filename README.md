# Theme boilerplate with parcel

A repo which make your **theme** development easier with preconfigure settings. Parcel + TailwindCSS + Plop

## Usage

1. Clone or download the Git Repo

```bash
git clone https://github.com/kucial/theme-boilerplate-with-parcel
```

```bash
cd theme-boilerplate
```

```bash
rm -rf .git && git init
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm start
```

### generator

There are two generator predefined, one for `page`, one for `partial`

```
# generate page about
npm run g page about

# generate partial page_header
npm run g partial page_header
```

## Directory

```
.
├── src
│   ├── index.html
│   ├── css
│   │   ├── main.scss
│   │   ├── pages
│   │   └── partials
│   ├── img
│   │   └── cover.png
│   ├── js
│   │   ├── main.js
│   │   └── pages
│   │       └── index.js
│   └── partials
│       └── common-head.html
└── static
    └── README.md                      # exteranl js library
```

## configuration

- [parcel-namer-custom](https://github.com/vseventer/parcel-namer-custom)
- [talwindcss](https://tailwindcss.com/docs/installation)
