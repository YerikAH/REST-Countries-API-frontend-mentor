<template>
  <div class="card_country">
    <img src="image" alt="country" />
    <div class="country_info">
      <h5 class="info_name">Germany</h5>
      <span class="info_types">
        <b>Population: </b>
        <p>81,770,900</p>
      </span>
      <span class="info_types">
        <b>Region: </b>
        <p>Europe</p>
      </span>
      <span class="info_types">
        <b>Capital: </b>
        <p>Berlin</p>
      </span>
    </div>
  </div>
</template>
<style scoped>
.card_country{
  width: 100%;
  max-width: 15.625rem;
  background-color: var();
  border-radius: 0.2rem;
  position: relative;
}
.card_country img{
  width: 100%;
}
.country_info{
  padding: 1rem 1rem 2rem 1rem;
}
.info_name{
  margin-bottom: 1rem;
  font: normal normal 800 1.2rem/1.5rem var(--font-primary);
}
.info_types{
  display: flex;
}
</style>
