<template>
    <div class="login">
        <form class="login__card" @submit.prevent="submitForm">
            <h3 class="login__card-title">Login</h3>
            <span class="login__card-input">
                <label for="email" class="login__card-input-label">Email</label>
                <input type="text" id="email" v-model="form.email" class="login__card-input-input" />
                <p class="login__card-input-error">{{ errors.email }}</p>
            </span>
            <span class="login__card-input">
                <label for="password" class="login__card-input-label">Password</label>
                <input type="password" id="password" v-model="form.password" class="login__card-input-input" />
                <p class="login__card-input-error">{{ errors.password }}</p>
            </span>
            <button type="submit" class="login__card-button button-white-blue">
                Send
            </button>
            <p class="login__card-redirect">
                ¿No tienes cuenta?
                <router-link to="/register">
                    <p class="login__card-redirect-link">Regístrate</p>
                </router-link>
            </p>
        </form>
    </div>
</template>
  
<script>
import { login } from '../services/auth.service';

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            errors: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        async submitForm() {
            this.errors = {};

            if (!this.form.email) {
                this.errors.email = 'El campo de correo electrónico es obligatorio.';
            } else if (
                !/^\S+@\S+\.\S+$/.test(this.form.email)
            ) {
                this.errors.email = 'El formato del correo electrónico no es válido.';
            }

            if (!this.form.password) {
                this.errors.password = 'El campo de contraseña es obligatorio.';
            }

            if (Object.keys(this.errors).length === 0) {
                try {
                    const isLogin = await login(this.form)
                    if(isLogin){
                        this.$router.push('/dashboard');
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        },
    },
};
</script>

<style scoped lang="scss">
.login {
    background-color: #eeeeee;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__card {
        background: linear-gradient(to bottom, #3f8ecf, #5c00b3);
        min-height: 300px;
        min-width: 300px;
        max-width: 380px;
        width: 60%;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: white;
        position: relative;

        &-title {
            text-align: center;
        }

        &-input {
            display: flex;
            flex-direction: column;
            gap: 5px;

            &-label {
                font-size: 12px;
                text-transform: capitalize;
            }

            &-input {
                padding: 5px;
                border-radius: 8px;
            }

            &-error {
                color: #ff9797;
                font-size: 10px;
            }
        }

        &-button {
            padding: 5px;
            width: 50%;
            margin: 0 auto;

            &:hover {
                background-color: #eeeeee;
            }
        }

        &-redirect {
            width: 100%;
            font-size: 10px;
            display: flex;
            justify-content: center;
            gap: 1ch;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);

            &-link {
                color: #98d1ff;
            }
        }
    }
}
</style>