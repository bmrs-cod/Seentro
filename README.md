# Seentro

## Integrantes
Bruno Marcelo Real

## Problema
Com o fim do TV Time, faltou uma forma simples de registrar filmes e
séries já assistidos e os que ainda se pretende assistir.

## Solução
O Seentro permite buscar filmes na base da TMDB, ver detalhes de cada
um, e montar uma lista pessoal de filmes salvos, sem cadastro nem
complexidade extra.

## Tecnologias
React, Vite, React Router, react-icons

## API usada
TMDB (The Movie Database)

## Funcionalidades
- Busca de filmes
- Lista de filmes populares na Home
- Página de detalhes de cada filme (rota dinâmica)
- Adicionar e remover filmes de uma lista pessoal
- Página dedicada para a lista pessoal

## Uso de IA
Utilizada como apoio na especificação (Spec-Driven Development) e na
escrita do código, seguindo os padrões ensinados em aula. As decisões
de escopo, design e arquitetura foram tomadas pelo aluno.

## Como rodar o projeto
1. Clone o repositório
2. Rode `npm install`
3. Crie um arquivo `.env` na raiz com `VITE_TMDB_API_KEY=sua_chave`
4. Rode `npm run dev`