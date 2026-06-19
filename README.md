# Calculadora de Metabolismo Basal

Uma página simples e responsiva para calcular o Metabolismo Basal (TMB) a partir de idade, peso e altura.

**Status:** Pronto — versão mínima funcional

**Sumário**
- **Descrição:** Calculadora front-end de Metabolismo Basal (Harris‑Benedict), sem backend necessário.
- **Demo:** Abra [index.html](index.html) no seu navegador.
- **Tecnologias:** HTML, CSS, JavaScript.

**Recursos**
- Calcula a taxa de metabolismo basal para homens e mulheres usando fórmulas tradicionais.
- Validações de entrada (idade, peso e altura) com tratamento de colagem e formatação de `peso` como decimal.
- Layout responsivo para dispositivos móveis e desktop.
- Controles para limpar e calcular o resultado.

**Como executar**
1. Clone ou baixe este repositório.
2. Abra o arquivo [index.html](index.html) no navegador.

**Uso**
1. Selecione o sexo (`Masculino` ou `Feminino`).
2. Informe sua `Idade` (anos), `Peso` (kg) e `Altura` (cm).
3. Clique em **Calcular**. O resultado (em kcal) aparecerá no campo de resultado.
4. Use **Limpar** para resetar os campos.

Se algum campo estiver vazio ou inválido, uma mensagem de erro será exibida.

As fórmulas e a lógica estão em [script.js](script.js). O resultado inicial padrão é `0` e o valor exibido é formatado com duas casas decimais.

**Fórmulas e origem**

As equações utilizadas para estimar a Taxa de Metabolismo Basal (TMB) nesta calculadora seguem a versão revisada da equação de Harris‑Benedict (Roza & Shizgal, 1984). Elas estimam a energia em kcal/dia necessária para manter as funções vitais em repouso a partir da idade, peso e altura.

Fórmulas (Revised Harris‑Benedict):

$$
	ext{TMB}_{masc} = 66.47 + 13.75\cdot\text{peso(kg)} + 5.003\cdot\text{altura(cm)} - 6.775\cdot\text{idade(anos)}
$$

$$
	ext{TMB}_{fem} = 655.09 + 9.563\cdot\text{peso(kg)} + 1.85\cdot\text{altura(cm)} - 4.676\cdot\text{idade(anos)}
$$

Como funciona:
- `peso` deve ser informado em quilogramas (kg).
- `altura` deve ser informada em centímetros (cm).
- `idade` em anos.
- A fórmula retorna uma estimativa em kcal/dia correspondente ao gasto energético em repouso (TMB). Valores individuais podem variar por composição corporal, genética e metodologia de medição.

Para alterar a fórmula usada, edite [script.js](script.js) e substitua as expressões no método `Calcular()`.

**Estrutura do projeto**
- [index.html](index.html) — página principal e interface do usuário.
- [style.css](style.css) — estilos e responsividade.
- [script.js](script.js) — lógica de cálculo, validações e manipulação de eventos.

**Contribuindo**
- Sugestões, correções e melhorias são bem-vindas. Abra uma issue descrevendo a proposta antes de enviar um pull request.

**Autor**
- Denis Bittencourt — https://denisbm.com