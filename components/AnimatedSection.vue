<template>
  <div
    ref="sectionRef"
    :class="[
      'transition-all duration-1000 ease-out',
      animationClass,
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  animation: {
    type: String,
    default: "fade-up",
    validator: (value) =>
      ["fade-up", "fade-left", "fade-right", "fade-down", "scale-up"].includes(value),
  },
  delay: {
    type: Number,
    default: 0,
  },
});

const sectionRef = ref(null);
const isVisible = ref(false);

const animationClass = computed(() => {
  const baseClass = "transition-all duration-1000 ease-out";

  switch (props.animation) {
    case "fade-left":
      return isVisible.value ? "translate-x-0" : "-translate-x-12";
    case "fade-right":
      return isVisible.value ? "translate-x-0" : "translate-x-12";
    case "fade-down":
      return isVisible.value ? "translate-y-0" : "-translate-y-12";
    case "scale-up":
      return isVisible.value ? "scale-100" : "scale-95";
    default: // fade-up
      return isVisible.value ? "translate-y-0" : "translate-y-12";
  }
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true;
          }, props.delay);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value);
    }
  });
});
</script>
