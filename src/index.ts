import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Conversão de Celsius para Fahrenheit
app.get('/convert/celsius-to-fahrenheit/:celsius', (req: Request, res: Response) => {
    const celsius = parseFloat(req.params.celsius);
    const fahrenheit = (celsius * 9 / 5) + 32;
    res.json({ celsius, fahrenheit });
});

// Conversão de Celsius para Kelvin
app.get('/convert/celsius-to-kelvin/:celsius', (req: Request, res: Response) => {
    const celsius = parseFloat(req.params.celsius);
    const kelvin = celsius + 273.15;
    res.json({ celsius, kelvin });
});

// Conversão de Dólar para Real
app.get('/convert/usd-to-brl/:usd', (req: Request, res: Response) => {
    const usd = parseFloat(req.params.usd);
    const brl = usd * 5.5;
    res.json({ usd, brl });
});

// Conversão de Euro para Real
app.get('/convert/eur-to-brl/:eur', (req: Request, res: Response) => {
    const eur = parseFloat(req.params.eur);
    const brl = eur * 5.9;
    res.json({ eur, brl });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
