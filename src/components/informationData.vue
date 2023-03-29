<script setup>
import twiterLogo from './icons/twiterLogo.vue'
import mgLogo from './icons/mgLogo.vue'
import fbLogo from './icons/fbLogo.vue'
import igLogo from './icons/igLogo.vue';
import dateComponent from './dateComponent.vue'
import { ref } from 'vue';
import axios from 'axios'
import { useProgrammatic } from '@oruga-ui/oruga-next'

const { oruga } = useProgrammatic()
const name = ref('');
const email = ref('');
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const sendDataUser = async () => {
  const data = {
    name: name.value,
    email: email.value
  }
  if (regex.test(email.value)) {
    try {
      const res = (await axios.post('http://localhost:7124/register', data)).data;
      res ? success() : false;
      name.value = "";
      email.value = "";
    } catch (error) {
      danger(error.response.data?.message?.error);
    }
  }
  else {
    danger("Por favor ingresa un email valido");
  }
}

const success = () => {
  oruga.notification.open({
    duration: 8000,
    message: 'Tu usario fue creado!',
    variant: 'success',
    position: 'top',
    closable: true
  })
}

const danger = (message) => {
  oruga.notification.open({
    duration: 8000,
    message: message || 'Verifica que hayas ingresado tu nombre y email',
    variant: 'danger',
    position: 'top',
    closable: true
  })
}


</script>

<template>
  <!-- Add Icons using String format -->
  <div class="container">
    <mgLogo />
    <div class="Introduction-text">
      <h1>PRÓXIMAMENTE</h1>
      <p>Brindamos soluciones personalizas para satisfacer tus necesidades de transporte y almacenamiento de tus
        productos.</p>
    </div>
    <dateComponent />
    <div class="create-user">
      <h3>¡Déjanos tu correo para mantenerte actualizado!</h3>
      <div class="data-imputs">
        <input type="text" placeholder="Nombre" v-model="name">
        <input type="email" placeholder="Ingresa tu correo" v-model="email">
        <button @click="sendDataUser"> Suscribete </button>
      </div>
    </div>
    <div id="redes" class="networks">
      <fbLogo />
      <igLogo />
      <twiterLogo />
    </div>
    <div id="contacs" class="contact-info">
      <div class="contacts-data">
        <font-awesome-icon :icon="['fas', 'location-dot']" style="color: #ffffff; " />
        <h3>Panamá</h3>
      </div>
      <div class="contacts-data">
        <font-awesome-icon :icon="['fas', 'at']" style="color: #ffffff;" />
        <h4>contact.weelogistics@gmail.com</h4>
      </div>
      <div class="contacts-data">
        <font-awesome-icon :icon="['fas', 'phone']" style="color: #ffffff;" />
        <h4>
          +507 12346798
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 83vh;
}

.Introduction-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.create-user {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 15%;
  align-items: center;
}

.data-imputs {
  width: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contacts-data {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.contact-info {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.networks {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 16%;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 45px;
  background: #0959BA;
  border: 5px none #1C6EA4;
  border-radius: 10px;
  color: white;
  font-size: 24px;
}

input {
  border: 5px none #1C6EA4;
  border-radius: 10px;
  height: 45px;
  margin: 0.4%;
  font-size: 16px;
  padding: 8px;
}

::-webkit-input-placeholder {
  color: #0959BA;
  font-style: normal;
  font-size: 20px;
  text-align: center;
}

h1 {
  font-weight: bold;
  font-size: 7rem;
  line-height: 150%;
}

p {
  width: 882px;
  height: 78px;
  font-weight: 100;
  font-size: 26px;
  line-height: 150%;
  text-align: center;
}

h3 {
  font-weight: 100;
  font-size: 32px;
  line-height: 150%;
  color: #FFFFFF;
}
</style>
