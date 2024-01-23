<template>
    <div class="login">
        <section class="login__card">
            <h3 class="login__card-title">Register</h3>
            <span class="login__card-avatar" @click="toggleAvatarMenu">
                <label class="login__card-avatar-title">Avatar</label>
                <img  class="login__card-avatar-image" :src="form.avatar" alt="Selected Avatar" />
                <div v-if="showAvatarMenu" class="login__card-avatar-menu">
                    <img
                        v-for="(avatar, index) in avatars"
                        :key="index"
                        @click="() => { selectAvatar(avatar); toggleAvatarMenu()}"
                        :src="getAvatarUrl(avatar)"
                        :alt="'Avatar ' + (index + 1)"
                        class="login__card-avatar-menu-image"
                    />
                </div>
            </span>
            <span class="login__card-input">
                <label for="name" class="login__card-input-label">Name</label>
                <input type="text" id="name" v-model="form.name" class="login__card-input-input" />
                <p class="login__card-input-error">{{ errors.name }}</p>
            </span>
            <span class="login__card-input">
                <label for="lastname" class="login__card-input-label">Lastname</label>
                <input type="text" id="lastname" v-model="form.lastname" class="login__card-input-input" />
                <p class="login__card-input-error">{{ errors.lastname }}</p>
            </span>
            <span class="login__card-input">
                <label for="email" class="login__card-input-label">Email</label>
                <input type="text" id="email" v-model="form.email" class="login__card-input-input" />
                <p class="login__card-input-error">{{ errors.email }}</p>
            </span>
            <span class="login__card-input">
                <label for="password" class="login__card-input-label">Password</label>
                <input type="text" id="password" v-model="form.password" class="login__card-input-input" />
                <p class="login__card-input-error">{{ errors.password }}</p>
            </span>
            <button type="button" class="login__card-button button-white-blue" @click="submitForm">Send</button>
            <p class="login__card-redirect">¿Tienes cuenta? <router-link to="/login"><p class="login__card-redirect-link">Logueate</p></router-link></p>
        </section>
    </div>
</template>

<script>
import { register } from '../services/auth.service';

export default {
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                avatar: 'https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/VIDEOMANAGER/avatares/1.jpeg', // Guarda la referencia del avatar seleccionado
            },
            errors: {
                name: '',
                lastname: '',
                email: '',
                password: '',
            },
            showAvatarMenu: false,
            avatars: [1, 2, 3, 4, 5, 6],
        };
    },
    methods: {
        toggleAvatarMenu() {
            this.showAvatarMenu = !this.showAvatarMenu;
        },
        selectAvatar(avatar) {
            this.form.avatar = this.getAvatarUrl(avatar);
            this.showAvatarMenu = false;
        },
        getAvatarUrl(avatar) {
            return `https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/VIDEOMANAGER/avatares/${avatar}.jpeg`;
        },
        async submitForm() {
            this.errors = {};

            if (!this.form.name) {
                this.errors.name = 'El campo de nombre es obligatorio.';
            }

            if (!this.form.lastname) {
                this.errors.lastname = 'El campo de apellido es obligatorio.';
            }

            if (!this.form.email) {
                this.errors.email = 'El campo de correo electrónico es obligatorio.';
            } else if (!/^\S+@\S+\.\S+$/.test(this.form.email)) {
                this.errors.email = 'El formato del correo electrónico no es válido.';
            }

            if (!this.form.password) {
                this.errors.password = 'El campo de contraseña es obligatorio.';
            }

            if (Object.keys(this.errors).length === 0) {
                try {
                    const isRegister = await register(this.form);
                    if (isRegister) {
                        console.log('Registro exitoso:', this.form);
                        this.$router.push('/dashboard');
                    }
                } catch (error) {
                    console.error(error);
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
            max-height: 550px;
            min-width: 300px;
            max-width: 380px;
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
            &-avatar {
                position: relative;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 5px;
                &-title {
                    font-size: 12px;
                    width: 100%;
                }
                &-image {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    cursor: pointer;
                    border-radius: 4px;
                    margin: 0 auto;
                    border: 1px dashed #eeeeee;
                }
                &-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: #fff;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 10px;
                    z-index: 1;
                    &-image {
                        width: 50px;
                        height: 50px;
                        object-fit: cover;
                        cursor: pointer;
                        border-radius: 4px;
                    }
                }
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
                margin-bottom: 10px;
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
