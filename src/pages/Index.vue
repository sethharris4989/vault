<template>
  <Layout>
    <nav class="grid-container">
      <div class="one">
        <h1>Seth <br>Harris</h1>
      </div>
      <div class="two">
        <h2>Projects</h2>
      </div>
      <div class="three">
        <h3>Social</h3>
      </div>
      <div class="four">
        <h3>About</h3>
      </div>
      <div class="five">
        <h3>Resume</h3>
      </div>
    </nav>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>


<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "one one one one one one two two two two two two" "one one one one one one two two two two two two" "one one one one one one two two two two two two" "one one one one one one two two two two two two" "one one one one one one two two two two two two" "one one one one one one two two two two two two" "four four four five five five two two two two two two" "four four four five five five two two two two two two" "four four four five five five two two two two two two" "four four four five five five three three three three three three" "four four four five five five three three three three three three" "four four four five five five three three three three three three";
  grid-gap: 15px;
}


.one { 
  grid-area: one; 
}

.two { 
  grid-area: two; 
}

.three { 
  grid-area: three; 
}

.four { 
  grid-area: four; 
}

.five { 
  grid-area: five; 
}


</style>
