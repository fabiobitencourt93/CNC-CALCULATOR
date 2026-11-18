# CNC Calculator

Aplicação web responsiva desenvolvida em HTML, CSS e JavaScript puro para calcular os principais parâmetros de fresamento CNC:

- Rotação da ferramenta em RPM
- Avanço linear em milímetros por minuto

O projeto foi desenvolvido como exemplo didático de aplicação frontend vanilla, sem frameworks ou bibliotecas externas.

## Funcionalidades

- Seleção de material com velocidade de corte predefinida
- Informação da velocidade de corte em metros por minuto
- Cálculo da rotação a partir do diâmetro da ferramenta
- Cálculo do avanço a partir do número de dentes e do avanço por dente
- Interface simples e direta
- Resultados arredondados para números inteiros

## Materiais disponíveis

| Material | Velocidade de corte (Vc) |
| --- | ---: |
| SAE 1020 | 180 m/min |
| Alumínio | 250 m/min |
| Inox 304 | 110 m/min |

## Como calcular

1. Selecione o material da peça.
2. Informe o diâmetro da ferramenta em milímetros.
3. Informe o número de dentes da ferramenta.
4. Informe o avanço por dente (`fz`) em milímetros.
5. Clique em **Calcular**.

## Fórmulas utilizadas

### Rotação da ferramenta

```text
RPM = (Vc x 1000) / (pi x d)
```

- `Vc`: velocidade de corte em m/min
- `d`: diâmetro da ferramenta em mm
- `pi`: constante 3,14159

### Avanço linear

```text
Avanço = RPM x z x fz
```

- `RPM`: rotação calculada
- `z`: número de dentes
- `fz`: avanço por dente em mm

## Estrutura do projeto

```text
senai-projeto-vanilla/
├── index.html     # Estrutura da página
├── style.css      # Estilos e layout
├── materials.js   # Catálogo de materiais e velocidades de corte
├── app.js         # Cálculos e interação com a interface
└── README.md      # Documentação do projeto
```

## Executando o projeto

Não é necessário instalar dependências.

### Opção 1: abrir diretamente

Abra o arquivo `index.html` em um navegador.

### Opção 2: executar com servidor local

Na raiz do projeto, execute:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

O uso de um servidor local também pode ser feito com a extensão Live Server do VS Code.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Observações

Os valores de velocidade de corte são parâmetros didáticos e podem variar conforme o processo real, o tipo de revestimento da ferramenta, a máquina, a geometria da ferramenta e as recomendações do fabricante.
