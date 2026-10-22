# A Prova dos Arquimagos — Guilda Arcana de Otimização


## Sobre o projeto

A Prova dos Arquimagos — Guilda Arcana de Otimização é um projeto acadêmico desenvolvido por Nicolas Pires Alvarenga e Julio Higor, com o objetivo de apresentar os conceitos de complexidade de algoritmos de maneira interativa e acessível.

O projeto utiliza uma temática de fantasia medieval, na qual diferentes ordens de arquimagos representam as principais classes de complexidade computacional. Por meio dessa abordagem, o conteúdo teórico da Ciência da Computação é associado a exemplos práticos em Python, permitindo que o usuário compreenda como diferentes algoritmos se comportam conforme o volume de dados aumenta.

O site foi desenvolvido com tecnologias web e oferece exemplos de código que podem ser executados diretamente no navegador.


## Objetivos

O principal objetivo do projeto é facilitar a compreensão da notação Big-O e demonstrar como ela permite analisar a eficiência de algoritmos.

A proposta busca aproximar a teoria da prática por meio de exemplos em Python, explicações sobre o crescimento do custo computacional e uma interface que estimula a exploração do conteúdo.

Além disso, o projeto permite aplicar conhecimentos de desenvolvimento web, integração entre tecnologias e organização de conteúdo técnico, transformando um assunto importante da Ciência da Computação em uma experiência de aprendizado mais envolvente.


## Conceito e linha de pensamento

A ideia central do projeto é apresentar a complexidade de algoritmos como diferentes ordens de poder dentro de uma guilda de arquimagos. Cada ordem representa uma classe de complexidade e demonstra como o custo de execução de um algoritmo pode variar de acordo com o tamanho da entrada.

A notação Big-O é utilizada para descrever o comportamento de crescimento de um algoritmo, considerando fatores como o número de operações realizadas e o aumento do volume de dados processados.

A abordagem combina três elementos: uma explicação conceitual, uma representação temática e um exemplo de código em Python. Dessa forma, o usuário pode relacionar a definição teórica com uma implementação prática e observar como diferentes estratégias de resolução podem apresentar custos computacionais distintos.

A interatividade também faz parte dessa proposta, permitindo que o usuário explore as ordens de complexidade e execute os exemplos apresentados.


## As sete ordens da complexidade

---- O(1) — Complexidade constante

Representa algoritmos cujo custo permanece constante, independentemente do tamanho da entrada. Um exemplo é acessar diretamente um elemento de uma lista por meio de seu índice, considerando as condições usuais dessa operação.

---- O(log n) — Complexidade logarítmica

Representa algoritmos que reduzem progressivamente o espaço de busca ou o problema a cada etapa. A busca binária é um exemplo clássico, pois divide pela metade o intervalo de pesquisa em cada comparação, desde que os dados estejam ordenados.

---- O(n) — Complexidade linear

Representa algoritmos cujo custo cresce proporcionalmente ao tamanho da entrada. Um exemplo é percorrer uma lista inteira para processar ou verificar seus elementos.

---- O(n log n) — Complexidade linearítmica

Representa algoritmos que combinam o processamento de elementos com etapas de divisão ou organização do problema. O Merge Sort é um exemplo, pois divide a lista em partes menores, ordena essas partes e depois as combina.

---- O(n²) — Complexidade quadrática

Representa algoritmos cujo custo pode crescer proporcionalmente ao quadrado do tamanho da entrada. Um exemplo é utilizar dois laços aninhados para comparar pares de elementos ou gerar combinações entre os elementos de uma coleção.

---- O(2ⁿ) — Complexidade exponencial

Representa algoritmos cujo número de possibilidades pode dobrar a cada novo elemento considerado. Um exemplo é explorar todas as combinações possíveis de escolhas binárias, situação que pode se tornar rapidamente custosa conforme a entrada aumenta.

---- O(n!) — Complexidade fatorial

Representa algoritmos cujo número de possibilidades cresce de maneira fatorial. A geração de todas as permutações de um conjunto é um exemplo, pois a quantidade de ordenações possíveis aumenta rapidamente com cada novo elemento.

Ao final, o projeto apresenta um desafio que convida o usuário a comparar estimativas de complexidade e aplicar os conceitos estudados. Essa etapa, chamada de O Destino do Reino, reforça a importância de reconhecer o crescimento do custo computacional para escolher soluções mais adequadas.


## Tecnologias utilizadas

O projeto utiliza HTML5 para estruturar o conteúdo da página, CSS3 para definir a aparência visual e JavaScript para controlar a interatividade e o comportamento da interface.

Python é utilizado nos exemplos de algoritmos apresentados ao usuário. Para permitir a execução dos códigos diretamente no navegador, o projeto utiliza Pyodide na versão 0.26.1, que disponibiliza um ambiente Python baseado em WebAssembly.

O Prism.js na versão 1.29.0 é utilizado para destacar a sintaxe dos trechos de código, tornando sua leitura mais clara. As bibliotecas externas são carregadas por meio de CDNs, o que significa que a conexão com a internet é necessária para carregá-las quando o projeto é executado dessa forma.


## Como o projeto funciona

A estrutura HTML organiza as seções, os textos explicativos e os exemplos de código. O CSS define o visual inspirado em uma ambientação de fantasia medieval, incluindo a disposição dos elementos e a apresentação das diferentes ordens de complexidade.

O JavaScript controla as interações da página e integra os recursos necessários para executar os exemplos. Com o Pyodide, os códigos Python podem ser processados no próprio navegador, sem exigir que o usuário instale Python localmente para experimentar os exemplos disponibilizados.

O Prism.js aplica o realce de sintaxe aos trechos de código, ajudando a distinguir os elementos da linguagem. A combinação dessas tecnologias permite reunir explicações, apresentação visual e experimentação prática em uma única página.


## Como executar o projeto

Para executar o projeto localmente, baixe ou clone o repositório para o computador e mantenha os arquivos na estrutura de diretórios em que foram disponibilizados.

Abra o arquivo HTML principal no navegador. Caso o arquivo principal tenha outro nome no repositório, utilize esse arquivo. Para uma experiência mais consistente durante o desenvolvimento, também é possível abrir a pasta do projeto em um editor de código e executá-lo por meio de uma extensão de servidor local, como o Live Server.

Como o projeto utiliza bibliotecas carregadas de CDNs, é necessário ter acesso à internet para que recursos como Pyodide e Prism.js sejam carregados corretamente.

O projeto também pode ser publicado em um serviço de hospedagem de páginas estáticas, como o GitHub Pages, desde que os arquivos necessários estejam incluídos no repositório e os caminhos utilizados pelo projeto estejam corretos.


## Ressalvas finais

A Prova dos Arquimagos — Guilda Arcana de Otimização busca unir conceitos fundamentais da Ciência da Computação com uma experiência de aprendizado visual e interativa. Ao apresentar as classes de complexidade por meio de uma temática de fantasia medieval, o projeto procura tornar um assunto abstrato mais compreensível sem deixar de lado sua aplicação técnica.

O desenvolvimento também representa uma oportunidade de aplicar conhecimentos de HTML, CSS, JavaScript e Python, além de explorar a integração de ferramentas que permitem executar código diretamente no navegador.

É importante lembrar que a notação Big-O descreve o comportamento de crescimento de um algoritmo, e não necessariamente seu tempo exato de execução em todas as situações. O desempenho real também pode depender da implementação, dos dados utilizados, do ambiente de execução e de outros fatores.

Como projeto acadêmico, a iniciativa serve tanto como recurso de apoio ao estudo quanto como demonstração prática da integração entre programação, análise de algoritmos e desenvolvimento web. Seu propósito principal é incentivar a compreensão da eficiência computacional e mostrar por que a escolha de um algoritmo adequado faz diferença na construção de soluções.
