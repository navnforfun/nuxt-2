<template>
  <section>
    <div class="flex justify-center">
      <div class="">
        <h3 class="font-bold text-3xl">
          Learn programing #{{ $route.params.id }} by Ngoc Anh
        </h3>
        <div class="flex justify-center">
          <button class="bg-green-300">Start now</button>
          <button class="bg-blue-300">Create a card</button>
        </div>
      </div>

      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div class="grid grid-cols-6 gap-4 mx-10">
      <div class="border-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png"
          alt=""
        />
      </div>

      <div class="border-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png"
          alt=""
        />
      </div>
      <div class="border-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png"
          alt=""
        />
      </div>
      <div class="border-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png"
          alt=""
        />
      </div>
      <div class="border-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  validate({ params }) {
    // console.log(ctx)
    // return /^\w{3,6}$/.test(params.id);
    return true;
  },
};
</script>
<style scoped></style>
