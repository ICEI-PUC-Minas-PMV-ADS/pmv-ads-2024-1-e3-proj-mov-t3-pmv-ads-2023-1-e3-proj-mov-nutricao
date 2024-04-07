# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Plano de teste de Software criado a partir dos requisitos funcionais declarados. O plano poderá ser adaptado conforme necessário para atender aos detalhes específicos do aplicativo.


1.	RF-001: Cadastro de Nutricionista (ALTA)
   Descrição: O aplicativo deve permitir que um nutricionista se cadastre.
   Plano de Teste:
  	
      Cenário de Teste 1: Registro Bem-Sucedido
  	
         1.	Abra o aplicativo.
         2.	Navegue para a tela de registro.
         3.	Insira informações válidas (nome, e-mail, senha, etc.).
         4.	Clique no botão de registro.
         5.	Verifique se o nutricionista é redirecionado para a tela de login.
    
    Cenário de Teste 2: Registro com Dados Inválidos
  	
         1.	Repita os passos 1 a 3 do cenário anterior.
         2.	Insira informações inválidas (por exemplo, e-mail inválido).
         3.	Clique no botão de registro.
         4.	Verifique se o aplicativo exibe uma mensagem de erro apropriada.
         
2.	RF-002: Login de Nutricionista (ALTA)
      Descrição: O aplicativo deve permitir que um nutricionista faça login.

      Plano de Teste:

      Cenário de Teste 1: Login Bem-Sucedido
   
         1.	Abra o aplicativo.
         2.	Navegue para a tela de login.
         3.	Insira credenciais válidas (e-mail e senha).
         4.	Clique no botão de login.
         5.	Verifique se o nutricionista é redirecionado para a tela principal.
   
      Cenário de Teste 2: Login com Credenciais Inválidas
   
         1.	Repita os passos 1 a 3 do cenário anterior.
         2.	Insira credenciais inválidas.
         3.	Clique no botão de login.
         4.	Verifique se o aplicativo exibe uma mensagem de erro apropriada.
      
3.	RF-003: Criação de Plano Alimentar (ALTA)

      Descrição: O aplicativo deve permitir que um nutricionista crie um plano alimentar.

      Plano de Teste:

      Cenário de Teste 1: Criação Bem-Sucedida do Plano Alimentar

         1.	Faça login como nutricionista.
         2.	Navegue para a tela de criação de plano alimentar.
         3.	Insira detalhes válidos do plano (refeições, alimentos, horários, etc.).
         4.	Salve o plano.
         5.	Verifique se o plano é exibido corretamente na lista de planos.

4.	RF-004: Gerenciamento de Plano Alimentar (MÉDIA)

      Descrição: O aplicativo deve permitir o gerenciamento de um plano alimentar existente.

      Plano de Teste:
	
      Cenário de Teste 1: Edição de Plano Alimentar

         1.	Faça login como nutricionista.
         2.	Acesse um plano alimentar existente.
         3.	Edite os detalhes do plano (por exemplo, adicione ou remova refeições).
         4.	Salve as alterações.
         5.	Verifique se as modificações são refletidas corretamente no plano.

5.	RF-005: Geração de PDF do Plano Alimentar (ALTA)

  	   Descrição: O aplicativo deve permitir que um nutricionista gere um PDF do plano alimentar.

      Plano de Teste:

  	   Cenário de Teste 1: Geração de PDF Bem-Sucedida

         1. Faça login como nutricionista.
         2.	Acesse um plano alimentar.
         3.	Selecione a opção para gerar um PDF.
         4.	Verifique se o PDF é gerado corretamente e pode ser visualizado.
  	
6.	RF-006: Tabela de Planos Alimentares Criados (MÉDIA)

  	   Descrição: O aplicativo deve apresentar uma tabela com os planos alimentares criados.

      Plano de Teste:

      Cenário de Teste 1: Exibição da Tabela de Planos Alimentares

         1.	Faça login como nutricionista.
         2.	Acesse a tela que lista os planos alimentares criados.
         3.	Verifique se a tabela exibe todos os planos criados.
         4.	Confirme se as informações (como nome do plano, data de criação, etc.) estão corretas.
      
7.	RF-007: Tela para Anotações do Profissional (BAIXA)

      Descrição: O aplicativo deve possuir uma tela onde o profissional (nutricionista) possa fazer anotações.

      Plano de Teste:
	
         1. Faça login como nutricionista.
         2. Acesse a tela de anotações.
         3.	Insira algumas anotações.
         4.	Verifique se as anotações são salvas corretamente e podem ser visualizadas posteriormente.

 

