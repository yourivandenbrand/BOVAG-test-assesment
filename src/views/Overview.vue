<template>
    <div>
        <div class="yellow-wrapper">
            <div class="yellow-wrapper__content p-text-left">
                <p class="yellow-wrapper__title">
                    {{ vehicles.length }} auto’s hebben we voor je gevonden.
                </p>
                <p class="yellow-wrapper__subtitle p-mt-2">
                    Alle occasions inclusief BOVAG Garantie en Omruilgarantie
                </p>
            </div>
        </div>
        <div class="overview">
            <div class="overview__list">
                <Occasion
                    v-for="vehicle in vehicles"
                    :key="vehicle.id"
                    :occasion="vehicle"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Occasion from "../components/Occasion";

export default {
    name: "Overview",
    components: {
        Occasion,
    },
    data() {
        return {
            vehicles: [],
        };
    },
    mounted() {
        this.getVehicles();
    },
    methods: {
        async getVehicles() {
            const { data } = await axios.get("http://localhost:3000/vehicles");
            this.vehicles = data;
        },
    },
};
</script>

<style lang="scss">
.yellow-wrapper {
    padding: 50px 0;
    background-color: #fed500;

    &__content {
        max-width: 1248px;
        margin: 0 auto;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0 10px;
    }
    &__subtitle {
        font-size: 14px;
        margin: 0 0 0 10px;
    }
}

.overview {
    max-width: 1248px;
    margin: 0 auto;
}
</style>