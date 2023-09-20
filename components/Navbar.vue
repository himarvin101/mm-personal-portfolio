<script setup lang="ts">
import { ref, reactive } from "vue";

const navigations = [{
  label: "Home",
  to: "/"
},
{
  label: "About Me",
  to: "/about"
},
{
  label: "Works",
  to: "/works"
},
{
  label: "Contact",
  to: "/contact"
}]
</script>

<template>
  <nav class="container mx-auto fixed w-full top-0 left-0 right-0">
    <div class="brand--con">
      <NuxtLink to="/"><h6>vin</h6></NuxtLink>
    </div>
    <div class="navigations--con">
      <ul>
        <li v-for="(nav, index) in navigations" :key="`navigation--index`">
          <NuxtLink :to="nav.to">{{ nav.label }}</NuxtLink>
        </li>
      </ul>
      <NuxtLink role="button" class="btn ml-8">Resumé</NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    height: 80px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;

    .brand--con h6 {
      text-transform: uppercase;
      font-family: 'Dolce Vita';
      font-weight: 300;
      font-size: 40px;
    }

    .navigations--con {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 38px;

      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 30%;
  
        li > a {
          display: inline-block;
          padding: 15px 40px 15px 0;
          border-bottom: 3px solid transparent;
          position: relative;
          -webkit-transition: 0.5s ease-in-out;
          transition: 0.5s ease-in-out;
          font-family: 'Roboto Slab', serif;
  
          &::before {
            content: '';
            bottom: 0;
            position: absolute;
            height: 3px;
            background: black;
            width: 0;
            -webkit-transition: 0.3s ease-in-out;
            transition: 0.3s ease-in-out;
            left: 0;
          }
  
          &:hover::before {
            width: 100%;
          }
        }
      }

      a[role=button] {
        padding: 10px 30px 13px;
        display: inline-flex;
        align-items: center;
      }
    }
  }
</style>