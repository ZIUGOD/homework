# Conversor de Unidades com Express e TypeScript

Este projeto é uma API simples para conversão de unidades, construída com Express e TypeScript. A API permite converter temperaturas entre Celsius, Fahrenheit e Kelvin, e moedas entre Dólar, Euro e Real.

## Requisitos

- Node.js e npm instalados

## Instalação

1. Instale as dependências:

   ```sh
   npm install
   ```

## Uso

1. Para iniciar o servidor, execute:

   ```sh
   npx ts-node src/index.ts
   ```

2. O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Conversão de Celsius para Fahrenheit

- **Endpoint:** `/convert/celsius-to-fahrenheit/:celsius`
- **Método:** GET
- **Parâmetros:**
  - `celsius` (float): Temperatura em Celsius
- **Resposta:**
  ```json
  {
    "celsius": 100,
    "fahrenheit": 212
  }
  ```

### Conversão de Celsius para Kelvin

- **Endpoint:** `/convert/celsius-to-kelvin/:celsius`
- **Método:** GET
- **Parâmetros:**
  - `celsius` (float): Temperatura em Celsius
- **Resposta:**
  ```json
  {
    "celsius": 100,
    "kelvin": 373.15
  }
  ```

### Conversão de Dólar para Real

- **Endpoint:** `/convert/usd-to-brl/:usd`
- **Método:** GET
- **Parâmetros:**
  - `usd` (float): Valor em Dólar
- **Resposta:**
  ```json
  {
    "usd": 100,
    "brl": 550
  }
  ```

### Conversão de Euro para Real

- **Endpoint:** `/convert/eur-to-brl/:eur`
- **Método:** GET
- **Parâmetros:**
  - `eur` (float): Valor em Euro
- **Resposta:**
  ```json
  {
    "eur": 100,
    "brl": 590
  }
  ```