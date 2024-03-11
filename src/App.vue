<template>
  <p>Ola mundo</p>
</template>

<script>
import Pessoa from './services/Pessoa';
export default
{

  mounted()
  {
    Pessoa.getAll().then(i =>{
      console.log(i)
    })
  }
}


</script>

