<template>
  <div class="login">
    <FormBox
      class="login-form"
      title="登录"
    >
      <InputCell
        class="login__input"
        v-model="formData.username"
        type="text"
        label="账号"
        placeholder="请输入账号"
        icon="username"
      />
      <!--      <InputCell-->
      <!--        class="login__input"-->
      <!--        v-model="formData.password"-->
      <!--        type="password"-->
      <!--        label="密码"-->
      <!--        placeholder="请输入密码"-->
      <!--        icon="password"-->
      <!--      />-->
      <!--      <InputCell-->
      <!--        class="login__input"-->
      <!--        v-model="formData.password"-->
      <!--        type="password"-->
      <!--        label="密码"-->
      <!--        placeholder="请输入密码"-->
      <!--        icon="password"-->
      <!--      >-->
      <!--        <template #default="{ klass }">-->
      <!--          <button :class="klass">-->
      <!--            发送验证码-->
      <!--          </button>-->
      <!--        </template>-->
      <!--      </InputCell>-->
      <!--      <template #button="{ klass }">-->
      <!--        <SubmitButton-->
      <!--          class="login-form__submit"-->
      <!--          :class="klass"-->
      <!--          label="登录"-->
      <!--        />-->
      <!--      </template>-->
    </FormBox>
    <LinkSwitch></LinkSwitch>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
