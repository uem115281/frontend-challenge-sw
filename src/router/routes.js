import { createRouter, createWebHistory } from 'vue-router';

import ListaPersonagens from '../pages/ListaPersonagens.vue';
import ListaFilmes from '../pages/ListaFilmes.vue';
import ListaPersonagensDetails from '../pages/ListaPersonagensDetails.vue';
import ListaFilmesDetails from '../pages/ListaFilmesDetails.vue';
import CadastroCasting from '../pages/CadastroCasting.vue';

const routes = [
    {
        path: '/',
        name: 'Inicial',
        component: ListaPersonagens
    },
    {
        path: '/personagens',
        name: 'Lista de personagens',
        component: ListaPersonagens
    },
    {
        path: '/filmes',
        name: 'Lista de filmes',
        component: ListaFilmes
    },
    {
        path: '/personagem/:id',
        name: 'Detalhes de personagens',
        component: ListaPersonagensDetails
    },
    {
        path: '/filme/:id',
        name: 'Detalhes de filmes',
        component: ListaFilmesDetails
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: CadastroCasting
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;