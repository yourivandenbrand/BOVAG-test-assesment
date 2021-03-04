<template>
    <div class="occasion-icon p-d-flex p-col-12">
        <div class="occasion-icon__icon">
            <font-awesome-icon :icon="icon" />
        </div>
        <div class="occasion-icon__text p-ml-4">{{ type }}</div>
    </div>
</template>

<script>
export default {
    name: "OccasionExtra",
    props: {
        type: String,
    },
    computed: {
        icon() {
            let icon;
            switch (this.type) {
                case "Climate control":
                    icon = "cloud-sun-rain";
                    break;
                case "Bluetooth carkit":
                    icon = "tooth";
                    break;
                case "Navigatie":
                    icon = "map-marker-alt";
                    break;
                case "Xenon verlichting":
                    icon = "lightbulb";
                    break;
                case "Dakreling":
                    icon = "hockey-puck";
                    break;
                case "Lichtmetalen velgen":
                    icon = "exclamation-circle";
                    break;
                case "Trekhaak":
                    icon = "feather";
                    break;
                case "Parkeersensoren achter":
                    icon = "bell";
                    break;
                default:
                    icon = "cloud-sun-rain";
            }
            return icon;
        },
    },
};
</script>

<style lang="scss">
.occasion-icon {
    &__icon {
        width: 10px;
    }
}
</style>