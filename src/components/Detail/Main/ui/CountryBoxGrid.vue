<template>
  <div class="detail_country_two_boxgrid">
    <div class="boxgrid_one grid">
      <span class="boxgrid_types">
        <b>Native Name:</b>
        <p>Belgie</p>
      </span>
      <span class="boxgrid_types">
        <b>Population:</b>
        <p>11,319,511</p>
      </span>
      <span class="boxgrid_types">
        <b>Region:</b>
        <p>Europe</p>
      </span>
      <span class="boxgrid_types">
        <b>Sub Region:</b>
        <p>Western Europe</p>
      </span>
      <span class="boxgrid_types">
        <b>Capital:</b>
        <p>Burssels</p>
      </span>
    </div>
    <div class="boxgrid_two grid">
      <span class="boxgrid_types">
        <b>Top Level Domain:</b>
        <p>.be</p>
      </span>
      <span class="boxgrid_types">
        <b>Currencies:</b>
        <p>Euro</p>
      </span>
      <span class="boxgrid_types">
        <b>Languages:</b>
        <p>Dutch, French, German</p>
      </span>
    </div>
  </div>
</template>
<style scoped>
#dark .boxgrid_types b{
  color: var(--white);
} 
#dark .boxgrid_types p{
  color: var(--white);
}
.detail_country_two_boxgrid {
  display: grid;
  place-items: start;
  gap: 1.5rem;
}
.grid {
  display: grid;
  width: 100%;
  place-items: start;
}
.boxgrid_types {
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.48, 0.25, 0.14, 0.91);
  display: flex;
  gap: 0.5rem;
  width: 100%;
}
.boxgrid_types b {
  font: normal normal 600 0.8rem/1.5rem var(--font-primary);
  color: var(--very-dark-blue-text);
}
.boxgrid_types p {
  font: normal normal 300 0.8rem/1.5rem var(--font-primary);
  color: var(--very-dark-blue-text);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media (min-width: 720px) {
  .detail_country_two_boxgrid {
    grid-template-columns: repeat(2, 50%);
  }
  .boxgrid_types p {
    font-size: 1rem;
    line-height: 1.8rem;
  }
  .boxgrid_types b {
    font-size: 1rem;
    line-height: 1.8rem;
  }
}
@media (min-width: 1024px) {
  .detail_country_two_boxgrid {
    padding-left: 3rem;
  }
}
</style>
