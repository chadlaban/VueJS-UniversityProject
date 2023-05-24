<template>
<!-- this main file will help the other pages transition to another page -->
  <div id="app">
    <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
      <router-view/>
    </transition>
  </div>
</template>


