*********************
********************

Console Emulator
cmder.net
download versao full
extrair em C:\Tools\Console-Emulator\cmder\

Configurando Variaveis de Ambiente
Propriedades em Meu Computador > Configura��es Avan�adas do Sistema > Variaveis de Ambiente > Novo
Nome Variavel : CONSOLE
Valor da Variavel : C:\Tools\Console-Emulator\cmder\vendor\git-for-windows\usr\bin

Configurado Path do Windows
Selecionar Path > Editar
Novo > %CONSOLE%

********************
********************

Visual Studio Code
https://visualstudio.microsoft.com/pt-br/

Instalar o git 
https://git-scm.com/

Plugins
Ruby > Peng Lv >>> NAO USAR
Cucumber (Gherkin) Full Support > Alexander Krechik
Vscode-icons > Roberto Huertas
Atom One Dark Theme > Mahmoud Ali
Material Icon Theme > Philipp Kief
Ruby Language Colorization > Drew Cain >>> USAR ESSE
Ruby-rubocop > misogi >>>> gem install rubocop




********************
********************

Ruby Basico
http://www.railsinstaller.org/pt-BR para instalar o Ruby

Para saber se foi instalado com sucesso
No terminal, dentro da pasta do projeto >>> ruby -v

https://www.ruby-lang.org/pt/

Sempre salvar com .rb

Para executar o programa Ruby, no console deve usar >>>>> ruby nomedoarquivo.rb

puts IMPRIMIR NA TELA


TIPOS 

Em Ruby o tipo de variavel é definido no momento em que a mesma recebe o valor

nome = 'Macbook Pro' #String
quantidade = 10 #Integer
preco 5000.00 #Float
disponivel = true/false #Boolean


OPERADORES TOMADAS DE DECISÃO

== igual
!= diferente
> maior
< menor
>= maior igual
<= menor igual

if idade >= 18
    puts 'maior de idade'
else
    puts 'menor de idade'
end

########################################
PARA COMENTAR BLOCO DE CODIGO CTRL + ; 
########################################


METODOS

def welcome
    puts 'Ola'
end

welcome >>> invocando o metodo 

def mostra_nome(nome)
    puts nome
end

mostra_nome('Erick') >>> invocando o metodo

def valor (v1, v2)
    v1 + v2
end

puts soma_valor(5,4) >>> invocando o metodo


ARRAYS

arr = 'Erick'
puts arr.class >>> PARA IDENTIFICAR O TIPO DA VARIAVEL

avengers = Array.new

avengers.push('Iron Man')
avengers.push('Spiderman')
avengers.push('Hulk')

puts avengers[numero do array desejado]

####################################################################################################        
UTILIZANDO @ ANTES DA VARIAVEL, A MESMA SE TRANSFORMA EM UMA VARIAVEL INSTANCIA,                   
ASSIM A VARIAVEL PODE SER USADA DENTRO E FORA DO METODO, SO FICA VIVA SOMENTE NA EXECUÇÃO DO METODO
####################################################################################################

##############################################
$ VARIAVEL GLOBAL, FICA DISPONIVEL PRA SEMPRE#
##############################################

@avengers = Array.new

@avengers.push('Iron Man') #0
@avengers.push('Spiderman') #1
@avengers.push('Hulk') #2

def imprime_hulk
    @avengers.each do |a|
        puts a if a == 'Hulk'
    end
end

imprime_hulk


CLASSES / HERANÇA

class Animal
    attr_accessor :nome, :idade, :raca

class Cachorro < Animal >>>>> HERANÇA

    def late >>>>> FUNÇÃO
        puts @nome + 'diz: AU AU AU...'
    end
end

spike = Cachorro.new >>>>> ATIVA A CLASSE CACHORRO
spike.nome = 'Spike'

spike = Cachorro.new
spike.nome = 'Snoop'

spike.late
snoop.late


********************
********************
********************
********************

BDD >>>> Dado Quando Então 1h24min

Valor de negocio
SENDO
POSSO
PARA

Dado > Pre condicao
Quando > Acao
Entao > Resultado esperado

********************
********************
********************
********************

CUCUMBER

Aumomatizar a documentação (especificaçoes)

********************
********************
********************
********************
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
START
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Instalar biblioteca para começar a trabalhar com programção Ruby
No terminal, dentro da pasta do projeto >>> gem install bundler

Estruturar projeto / Inicializar arquivo GEMFILE na pasta do projeto
No terminal, dentro da pasta do projeto >>> bundle init

Bundle esta para Ruby assim como Maven esta para Java

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Abrir GEMFILE dentro VSC e limpar, deixar somente 

source "https://rubygems.org" >>> Essa é a origem, todas as bibliotecas / gems do Rudy, são baixadas por ela

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Para executar as especificações

Dentro do GEMFILE no VSC >>> gem 'cucumber'
No terminal, dentro da pasta do projeto >>> bundle install OU gem install cucumber

Para saber se o Cucumber foi intalado com sucesso
No terminal, dentro da pasta do projeto >>> cucumber --version

Para inicializar um projeto Cucumber 
No terminal, dentro da pasta do projeto >>> cucumber --init >>> vai criar pasta Features dentro do projeto

No VSC dentro da pasta Feature, Criar nomeDaFuncionalidade.feature(no singular)

Para descrever a historia usar a palavra reservada FUNCIONALIDADE

Definir linguagem Portugues
#language:pt 

Para executar o Cucumber no terminal 
No terminal, dentro da pasta do projeto >>> cucumber

No VSC dentro da pasta step_definitions, criar nomeDoCenario_steps.rb
Colar os metodos criados pelo cucumber no arquivo

PARA EXECUTAR CENARIOS COM TAGS >>>>> cucumber -t @nomeDaTag

Biblioteca que ajuda no processo de verificação
Dentro do GEMFILE no VSC >>> gem 'rspec'
No terminal, dentro da pasta do projeto >>> bundle install 

************************************


udemy web drive java - primerio
ninja house automação do zero




