<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faRocket, faEnvelope, faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, faRocket, faEnvelope, faGear, faHeart, faPaperPlane)

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>


<template>
  <aside class="left-bar">
    <figure class="left-bar__logo">
        <p>P</p>
    </figure>
    <ul class="left-bar__menu">
        <li class="left-bar__menu-icon active">
          <FontAwesomeIcon icon="house" />
        </li>
        <li class="left-bar__menu-icon">
          <FontAwesomeIcon icon="envelope" />
        </li>
        <li class="left-bar__menu-icon">
          <FontAwesomeIcon icon="paper-plane" />
        </li>
        <li class="left-bar__menu-icon">
          <FontAwesomeIcon icon="rocket" />
        </li>
        <li class="left-bar__menu-icon">
          <FontAwesomeIcon icon="heart" />
        </li>
    </ul>
    <span class="left-bar__icon">
      <FontAwesomeIcon icon="gear" />
    </span>
  </aside>
</template>

<style scoped lang="scss">

  .active {
    border-right: 3px solid #008ae6;
    color: #008ae6;
  }
  .left-bar {
    height: 100%;
    width: 70px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding-top: 15px;
    position: relative;
    box-shadow: 10px 0 50px 5px #0003;
    &__logo{
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #150552;
      border-radius: 8px;
      color: white;
      margin-bottom: 150px;
      cursor: pointer;
    }
    &__menu {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &-icon {
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        &:hover {
          border-right: 3px solid #008ae6;
          color: #008ae6;
        }
      }
    }
    &__icon{
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      &:hover {
        color: #008ae6;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .left-bar {
      position: sticky;
      top:0
    }
  }
</style>
