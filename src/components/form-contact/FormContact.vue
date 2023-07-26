<script setup></script>

<template>
  <div class="cmp-form-contact">
    <h1 class="cmp-form-contact__title">Contato</h1>
    <form action="" method="post" class="cmp-form-contact__form">
      <input type="text" placeholder="Nome" />
      <input type="email" name="" id="" placeholder="E-mail" />
      <input type="tel" name="" id="" placeholder="Whatsapp" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Mensagem"
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/variables";

.cmp-form-contact {
  &__title {
    font-family: $font-family;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.1em;
    color: $font-color;
    text-align: center;

    &::after {
      display: block;
      content: "**********";
      font-family: $font-family;
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.25rem;
      letter-spacing: 0.3em;
      color: $font-color;
      text-align: center;
      margin-top: 0.75rem;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2.5rem;
    position: relative;

    input,
    textarea {
      background-color: transparent;
      border: 0.0625rem solid $font-color;
      padding: 0.625rem 0.875rem;
      font-family: $font-family;
      font-style: normal;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.25rem;
      letter-spacing: 0.1em;
      color: $font-color;

      &::placeholder {
        font-family: $font-family;
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: 0.1em;
        color: $font-color;
      }
    }

    textarea {
      resize: none;
    }

    button {
      font-family: $font-family;
      font-style: normal;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.25rem;
      letter-spacing: 0.1em;
      color: $font-color;
      background-color: transparent;
      border: 2px solid $font-color;
      padding: 0.5rem 1.5rem;
      position: absolute;
      right: 0;
      bottom: -4rem;
    }
  }
}
</style>
