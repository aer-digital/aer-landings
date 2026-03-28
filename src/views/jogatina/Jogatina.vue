<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue';

  let post = ref(0);
  let form = reactive(
    {
      name: '',
      email: '',
      category: '',
      message: ''
    }
  );

  onMounted(() => {
    post.value = Math.floor(Math.random() * 3);
  });

</script>

<template>
  <!-- Wrapper -->
  <div id="wrapper">

    <!-- Intro -->
    <section class="intro">
      <header>
        <h1>App Recompensa</h1>
        <p>Em breve, uma solução inovadora e acessível que auxiliará na recuperação de veículos roubados ou furtados.
        </p>
        <ul class="actions">
          <li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
        </ul>
      </header>
      <div class="content">
        <span class="image fill" data-position="center"><img src="../../assets/images/logo.png" alt="" /></span>
      </div>
    </section>

    <!-- Post 1 -->
    <section id="first" v-if="post == 0">
      <header>
        <h2>Como descobrir se seu carro foi clonado?</h2>
      </header>
      <div class="content">
        <span class="image main"><img src="../../assets/images/descobrir_carro_roubado.png" alt="" /></span>
        <div>
          <strong>Receber multas que não reconhece</strong>
          <p>
            Verifique se há multas em locais onde você não esteve.
            Isso pode ser um indício de clonagem, pois o veículo clonado pode estar sendo usado para cometer infrações.
          </p>
        </div>

        <div>
          <strong>Verificar placa e chassi</strong>
          <p>
            Outra forma, é comparar os números de chassi e motor do seu veículo com os registrados no documento.
            Se houver discrepâncias, pode indicar clonagem.
          </p>
        </div>

        <div>
          <strong>Consultar orgãoes de transito</strong>
          <p>
            Utilize serviços online ou vá até o órgão de trânsito responsável para consultar a situação do veículo.
            Ferramentas como o SINESP Cidadão, permitem verificar se há registros de ocorrências a placa do seu carro.
          </p>
        </div>
      </div>
    </section>

    <!-- Post 2 -->
    <section id="first" v-if="post == 1">
      <header>
        <h2>Como descobrir se seu carro foi clonado?</h2>
      </header>
      <div class="content">
        <span class="image main"><img src="../../assets/images/recuperar_umveiculo_roubado.png" alt="" /></span>
        <div>
          <strong>Contate a polícia</strong>
          <p>
            Em um momento de tensão, muitas pessoas podem se esquecer de pedir auxílio às autoridades.
            O tempo é um fator muito importante que incide sobre a chance de reencontrar o veículo subtraído.
            Ligue 190 assim que possível.
          </p>
        </div>

        <div>
          <strong>Acione a seguradora ou rastreamento</strong>
          <p>
            Caso tenha seguro ou rastreador em seu veículo, informe imediatamente a empresa sobre o roubo ou furto.
            Assim, a mesma poderá iniciar o processo de recuperação e, se o veículo não for, a indenização conforme a
            apólice.
          </p>
        </div>

        <div>
          <strong>Registre um B.O.</strong>
          <p>
            Não deixe de registrar um boletim de ocorrência (B.O.) na delegacia mais próxima ou de serviços online
            disponíveis em algumas regiões.
            O B.O. é essencial para formalizar a situação e iniciar a investigação policial.
          </p>
        </div>

        <div>
          <strong>Solicite reembolso do IPVA</strong>
          <p>
            Caso não consiga recuperar seu veículo, com o B.O. em mãos, você pode solicitar uma restituição de parte do
            IPVA junto às secretarias estaduais da Fazenda, responsáveis pela cobrança do imposto.
            Não são todos os estados que oferecem esse benefício.
          </p>
        </div>
      </div>

    </section>

    <!-- Post 3 -->
    <section id="first" v-if="post == 2">
      <header>
        <h2>Roubaram um veículo na sua rua e você nem deve estar sabendo...</h2>
      </header>
      <div class="content">
        <span class="image main"><img src="../../assets/images/alert.png" alt="" /></span>
        <div>
          <strong>Aumento de roubos!</strong>
          <p>
            O Brasil registrou em média <strong>MIL ROUBOS</strong> de carros por dia em 2023, sendo 373.225 ocorrências
            no ano.
            <br><strong>8% a mais que no ano de 2022!</strong>
          </p>
        </div>

        <div>
          <strong>E quantos deles são recuperados?</strong>
          <p>
            Em média, apenas 30% dos carros roubados voltam para seus donos.
            Ou seja, 70% nunca mais são vistos.
          </p>
        </div>
      </div>
    </section>

    <!-- Section -->
    <section>
      <header>
        <h2>Ficou interessado na nossa solução?</h2>
      </header>
      <div class="content">
        <p>Fique atento nas nossas <strong>Plataformas digitais</strong> que em breve já estaremos na sua loja de apps.
        </p>
        <div>
          <ul class="items">
            <li>
              <ul class="icons">
                <li>
                  <a href="https://www.instagram.com/recompensa.si/" target="_blank"
                    class="icon brands fa-instagram"><span class="label">Instagram</span></a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@recompensa.si" target="_blank" class="icon brands fa-tiktok"><span
                      class="label">Codepen</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <footer>

      </footer>
    </section>

    <section>
      <header>
        <h2>Alguma duvida?</h2>
        <a target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdZxUHZne79oSGYAC_-Xqa3VfJ6w7H_vojg3Lpa-zqQ3OOdzg/viewform">
          <div id="button_google_forms">
            <h3>🔗 Fale conosco</h3>
          </div>
        </a>
      </header>
    </section>
  </div>
</template>

<style lang="scss">
  input[type="submit"],
  input[type="reset"] {
    color: #EAE4D7 !important;
    font-weight: bold;
  }

  ::placeholder {
    color: #5555559a !important;
  }

  #button_google_forms{
    display: inline-block;
    padding: 20px 40px;
    background-color: #02232C;
    border-radius: 10px;
    
    h3{
      margin: 0;
    }
  }
</style>
