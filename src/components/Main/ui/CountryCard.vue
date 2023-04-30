<template>
  <div class="card_country">
    <img src="https://flagcdn.com/w320/tt.png" alt="country" />
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
#dark .card_country {
  background-color: var(--dark-blue);
}
#dark .info_name {
  color: var(--white);
}
#dark .info_types b{
  color: var(--white);
}

#dark .info_types p{
  color: var(--white);
}
.card_country {
  width: 100%;
  max-width: 15.625rem;
  background-color: var(--white);
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
}
.card_country img {
  width: 100%;
}
.country_info {
  padding: 1rem 1rem 2rem 1rem;
}
.info_name {
  margin-bottom: 1rem;
  font: normal normal 800 1.1rem/1.5rem var(--font-primary);
  color: var(--very-dark-blue-text);
}
.info_types {
  display: flex;
  gap: 0.4rem;
}
.info_types b{
  font: normal normal 600 0.8rem/1.2rem var(--font-primary);
  color: var(--very-dark-blue-text);
}
.info_types p{
  font: normal normal 300 0.8rem/1.2rem var(--font-primary);
  color: var(--very-dark-blue-text);
}
</style>
