# Especificações do Projeto

A equipe se reuniu para discutir a definição do problema e, a partir disso, as possíveis soluções a partir da experiência dos usuários. Após isso, foi possível levantar os detalhes seguintes nessa seção.

## Personas


### Joana Oliveira

<img src="./img/persona-feminina.jpg" width="250" height="250">

**Idade:** 50 anos

**Ocupação:** Nutricionista especializada em alimentação saudável e bem-estar.

**História:** Joana Oliveira sempre teve paixão por ajudar as pessoas a melhorarem sua qualidade de vida por meio da alimentação. Após anos de experiência em clínicas presenciais, decidiu dar um passo à frente e ingressar no mundo do trabalho remoto. Sua jornada começou a partir da necessidade de flexibilidade para conciliar a vida profissional e pessoal. Formada em Nutrição pela Universidade Federal, Joana buscou se aprimorar em tecnologias para otimizar a gestão de seus clientes.

**Motivação Atual:** Trabalhar remotamente como nutricionista e organizar os clientes de forma eficiente, utilizando ferramentas digitais para simplificar o processo.

**Frustrações Atuais:** A dificuldade em organizar os clientes através de uma agenda convencional demanda muito tempo, buscando uma solução mais prática e moderna.

***

### Michelle de Paula

<img src="./img/persona-feminina.jpg" width="250" height="250">

**Idade:** 28 anos

**Ocupação:** Nutricionista Esportiva e Coach Nutricional.

**História:** Michelle de Paula sempre foi uma entusiasta da tecnologia, mas encontrou desafios ao tentar integrar ferramentas digitais em seu trabalho como nutricionista. Formada em Nutrição pela Universidade Estadual, ela buscou especialização em nutrição esportiva e coaching nutricional. Sua paixão pela área a levou a querer criar métodos mais eficazes para compartilhar planos alimentares com seus clientes.

**Motivação Atual:** Desenvolver um método rápido e eficaz para compartilhar o plano alimentar de seus clientes, aproveitando as facilidades oferecidas pela tecnologia.

**Frustrações Atuais:** Falta de afinidade com as ferramentas tecnológicas disponíveis, o que impede a agilidade e eficiência desejadas no processo de compartilhamento de informações.

***

### Tiago Ribeiro

<img src="./img/persona-masculina.jpg" width="250" height="250">

**Idade:** 35 anos

**Ocupação:** Coach de Nutrição e Bem-Estar.

**História:** Tiago Ribeiro trilhou um caminho diversificado na área da saúde, desde a formação em Educação Física até a especialização em coaching de nutrição e bem-estar. Com uma abordagem holística, Tiago sempre buscou métodos para registrar e acompanhar o progresso de seus clientes de maneira mais organizada.

**Motivação Atual:** Anotar e acompanhar o progresso de seus clientes de forma mais eficiente e organizada, utilizando tecnologias que facilitem a gestão de dados.

**Frustrações Atuais:** Dificuldade em organizar todos os progressos de seus clientes em um único lugar, buscando uma solução integrada e de fácil acesso para melhorar a eficiência do coaching nutricional.

### Gustavo Silva

<img src="./img/persona-masculina.jpg" width="250" height="250">

**Idade:** 21 anos

**Ocupação:** Estudante de Nutrição.

**História:** Gustavo Silva é estudante de nutrição, atualmente no sexto período. Ingressou na área por paixão à alimentação saudável, e têm descoberto outras abordagens não convencionais na nutrição.

**Motivação Atual:** Ter experiência lidando com pacientes reais em estágio de Nutrição Clínica.

**Frustrações Atuais:** Dificuldade em aprender sobre organização de pacientes, buscando alguma solução mais automatizada.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Joana Oliveira           | Trabalhar remotamente como nutricionista e organizar clientes de forma eficiente. | Ter mais flexibilidade na gestão de clientes e otimizar meu tempo para conciliar vida profissional e pessoal. |
| Michelle de Paula        | Obter um método rápido de compartilhar o plano alimentar de seus pacientes. | Aumentar a eficiência na entrega de planos alimentares, proporcionando melhor suporte e satisfação aos clientes. |
| Tiago Ribeiro            | Anotar o progresso de seus pacientes de maneira organizada. | Facilitar o acompanhamento do progresso dos clientes, proporcionando um coaching mais eficaz e personalizado. |
| Gustavo Silva            | Aprender sobre o processo de atender um cliente. | Ter um melhor desenvolvimento acadêmico e me tornar um bom profissional. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos



### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir o cadastro de um nutricionista.  | ALTA | 
|RF-002| O aplicativo deve permitir o login de um nutricionista.   | ALTA |
|RF-003| O aplicativo deve permitir a criação de um plano alimentar. | ALTA | 
|RF-004| O aplicativo deve permitir o gerenciamento de um plano alimentar. | MÉDIA | 
|RF-005| O aplicativo deve possuir a função de gerar um PDF do plano alimentar. | ALTA | 
|RF-006| O aplicativo deve apresentar uma tabela com os planos alimentares criados. | MÉDIA | 
|RF-007| O aplicativo deve possuir uma tela para anotações do profissional. | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O aplicativo deve gerar o PDF em até 10 segundos. |  ALTA | 
|RNF-003| O aplicativo deve possuir uma boa navegabilidade e usabilidade, facilitando a experiência do usuário. | MÉDIA | 
|RNF-004| O aplicativo deve ter bom nível de contraste entre os elementos da tela em conformidade. | BAIXA | 
|RNF-005| O aplicativo deve garantir a segurança dos dados do cliente. | ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

## Diagrama de Casos de Uso

![Diagrama de Casos de Uso](/docs/img/diagrama-de-casos-uso.png "Diagrama de Casos de Uso")

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
