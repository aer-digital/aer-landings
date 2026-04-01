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
    <h1>Jogatina</h1>
    <p>Em breve, o seu app completo para aprender, organizar e jogar os principais jogos de cartas — tudo em um só lugar.
    </p>
    <ul class="actions">
      <li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
    </ul>
  </header>
  <div class="content">
    <span class="image fill" data-position="center"><img src="../../assets/images/jogatina/logo.png" alt="" /></span>
  </div>
</section>

<!-- Post 1 -->
<section id="first" v-if="post == 0">
  <header>
    <h2>Aprenda a jogar sem complicação</h2>
  </header>
  <div class="content">
    <!-- <span class="image main"><img src="../../assets/images/descobrir_carro_roubado.png" alt="" /></span> -->

    <div>
      <strong>Tutoriais simples e diretos</strong>
      <p>
        Aprenda as regras dos principais jogos de cartas de forma rápida, com explicações claras e objetivas.
      </p>
    </div>

    <div>
      <strong>Dicas e estratégias</strong>
      <p>
        Vá além do básico com dicas práticas para melhorar seu jogo e se destacar nas partidas.
      </p>
    </div>

    <div>
      <strong>Tudo em um só lugar</strong>
      <p>
        Nada de procurar regras em vários sites — aqui você encontra tudo organizado e fácil de acessar.
      </p>
    </div>
  </div>
</section>

<!-- Post 2 -->
<section id="first" v-if="post == 1">
  <header>
    <h2>Ferramentas para suas partidas</h2>
  </header>
  <div class="content">
    <!-- <span class="image main"><img src="../../assets/images/recuperar_umveiculo_roubado.png" alt="" /></span> -->

    <div>
      <strong>Contador de pontos</strong>
      <p>
        Marque pontos de forma prática durante o jogo, sem precisar improvisar papel ou memória.
      </p>
    </div>

    <div>
      <strong>Organização de partidas</strong>
      <p>
        Tenha suporte para diferentes jogos e formatos, facilitando a experiência para você e seus amigos.
      </p>
    </div>

    <div>
      <strong>Experiência offline</strong>
      <p>
        Use o app em qualquer lugar, mesmo sem internet, ideal para jogar em qualquer momento.
      </p>
    </div>

    <div>
      <strong>Pronto para vários jogos</strong>
      <p>
        Do Truco à Cacheta — e muitos outros — tudo pensado para evoluir junto com você.
      </p>
    </div>
  </div>
</section>

<!-- Post 3 -->
<section id="first" v-if="post == 2">
  <header>
    <h2>Seu companheiro para jogos de cartas</h2>
  </header>
  <div class="content">
    <!-- <span class="image main"><img src="../../assets/images/alert.png" alt="" /></span> -->

    <div>
      <strong>Perfeito para qualquer ocasião</strong>
      <p>
        Seja em casa, com amigos ou em viagem, tenha sempre as regras e ferramentas na palma da mão.
      </p>
    </div>

    <div>
      <strong>Menos confusão, mais jogo</strong>
      <p>
        Chega de discutir regra no meio da partida — consulte rapidamente e continue jogando.
      </p>
    </div>
  </div>
</section>

<!-- Section -->
<section>
  <header>
    <h2>Curtiu a ideia?</h2>
  </header>
  <div class="content">
    <p>
      Fique de olho no nosso <strong>site</strong> — em breve o Jogatina estará disponível na sua loja de apps.
    </p>
    <!-- <div>
      <ul class="items">
        <li>
          <ul class="icons">
            <li>
              <a href="https://www.instagram.com/recompensa.si/" target="_blank"
                class="icon brands fa-instagram"><span class="label">Instagram</span></a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@recompensa.si" target="_blank"
                class="icon brands fa-tiktok"><span class="label">TikTok</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div> -->
  </div>
</section>

<!-- <section>
  <header>
    <h2>Ficou com alguma dúvida?</h2>
    <a target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdZxUHZne79oSGYAC_-Xqa3VfJ6w7H_vojg3Lpa-zqQ3OOdzg/viewform">
      <div id="button_google_forms">
        <h3>🔗 Fale com a gente</h3>
      </div>
    </a>
  </header>
</section> -->
  </div>
</template>

<style lang="scss">
  @use "./style.scss";

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

  #scrollUp:before{
    background: style.$primary;
    border-radius: 10px;
    width: 50px;
    height: 50px;
  }
</style>
