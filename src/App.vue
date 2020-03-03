<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/renderless">Renderless</router-link>|
      <router-link to="/compound">Compound</router-link> | 
      <router-link to="/sortable-list">Sortable List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style src="./assets/app.css" />
