<script setup>
    defineProps({
  title: String,
  date: String,
  description: String
})

</script>

<template>
        <div>
        <div class='transition duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
         backdrop-blur-md rounded-2xl  p-[20px] cursor-pointer shadow-lg mt-[16px]  sm:w-[380px] sm:h-[230px]  md:w-[500px] md:h-[240px] lg:w-[620px] xl:h[250] group'>
                <h2 class='font-bold text-xl text-white font-poppins'>{{title}}</h2>
                <h3 class='font-semibold text-white font-poppins'>{{date}}</h3>
                <p class='text-gray-400 font-quicksand'>{{description}}</p>
                <span class='text-blue-500 cursor-pointer'>Read</span>

                <span class='inline-block text-blue-500 ml-[2px] w-6 h-6 transition-transform duration-300 group-hover:translate-x-2'>&#8594;</span> 

                
          
            </div>
    </div>
</template>
    
  