export type NavMenuListType = {
    name: string;
    category: string;
    id: number;
};

export const NAV_MENU_MAIN = {
    books: {
        name: 'Витрина книг',
        path: 'books',
    },
    terms: {
        name: 'Правила пользования',
        path: 'terms',
    },
    contract: {
        name: 'Договор оферты',
        path: 'contract',
    },
    profile: {
        name: 'Профиль',
        path: 'profile',
    },
    exit: {
        name: 'Выход',
        path: 'auth',
    },
};

export const NAV_MENU_ALL = {
    name: 'Все книги',
    category: 'all',
    id: 0,
};

export const NAV_MENU_LIST: NavMenuListType[] = [
    {
        name: 'Бизнес книги',
        category: 'biznes',
        id: 1,
    },
    {
        name: 'Детективы',
        category: 'detectives',
        id: 2,
    },
    {
        name: 'Детские книги',
        category: 'children',
        id: 3,
    },
    {
        name: 'Зарубежная литература',
        category: 'foreign',
        id: 4,
    },
    {
        name: 'История',
        category: 'history',
        id: 5,
    },
    {
        name: 'Классическая литература',
        category: 'classic',
        id: 6,
    },
    {
        name: 'Книги по психологии',
        category: 'psychics',
        id: 7,
    },
    {
        name: 'Компьютерная литература',
        category: 'computer',
        id: 8,
    },
    {
        name: 'Культура и искусство',
        category: 'culture',
        id: 9,
    },
    {
        name: 'Наука и образование',
        category: 'science',
        id: 10,
    },
    {
        name: 'Публицистическая литература',
        category: 'publicistic',
        id: 11,
    },
    {
        name: 'Справочники',
        category: 'manual',
        id: 12,
    },
    {
        name: 'Фантастика',
        category: 'fantasy',
        id: 13,
    },
    {
        name: 'Юмористическая литература',
        category: 'humor',
        id: 14,
    },
];
