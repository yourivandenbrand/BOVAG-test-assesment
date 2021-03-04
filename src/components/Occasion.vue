<template>
    <div class="occasion p-px-5 p-pb-5 p-pt-2 p-m-5">
        <div class="occasion__title p-text-left p-my-3">
            {{ occasion.brand }} {{ occasion.model }}
            {{ occasion.bodyType }} ({{
                occasion.accessories.join(", ").toString("")
            }})
        </div>
        <div class="occasion__content p-grid">
            <img
                :src="`${occasion.images[0]}`"
                alt="occasion-image"
                class="occasion__content-image p-col-12 p-md-3"
            />
            <div class="occasion__content-info p-col-9 p-d-flex p-flex-column">
                <div class="p-col-12 p-d-flex">
                    <div class="occasion__content-price">
                        &#8364; {{ occasionPrice }} ,-
                    </div>
                </div>

                <div
                    class="occasion__specs p-col-12 p-grid p-text-left p-d-flex"
                >
                    <div class="occasion__specs--left p-d-flex p-md-4 p-mr-6">
                        <ul
                            class="occasion__specs--ul occasion__specs--ul-left"
                        >
                            <li>Kilometrage:</li>
                            <li>Jaartal:</li>
                            <li>Transmissie:</li>
                        </ul>
                        <ul class="occasion__specs--ul">
                            <li>{{ occasion.mileage }}</li>
                            <li>{{ occasion.yearOfManufacture }}</li>
                            <li>{{ occasion.transmission }}</li>
                        </ul>
                    </div>
                    <div class="occasion__specs--right p-md-4 p-d-flex">
                        <ul
                            class="occasion__specs--ul occasion__specs--ul-left"
                        >
                            <li>Merk:</li>
                            <li>Kleur:</li>
                            <li>Transmissie:</li>
                        </ul>
                        <ul class="occasion__specs--ul">
                            <li>{{ occasion.brand }}</li>
                            <li>{{ occasion.color }}</li>
                            <li>{{ occasion.bodyType }}</li>
                        </ul>
                    </div>
                    <div
                        class="occasion__extras p-col-12 p-grid"
                        v-if="showDetails"
                    >
                        <div class="occasion__extras--row1 p-md-6 p-col-12">
                            <OccasionExtra
                                v-for="extra in occasion.accessories.slice(
                                    0,
                                    4
                                )"
                                :key="extra.id"
                                :type="extra"
                            />
                        </div>
                        <div class="occasion__extras--row2 p-md-6 p-col-12">
                            <OccasionExtra
                                v-for="extra in occasion.accessories.slice(
                                    4,
                                    9
                                )"
                                :key="extra.id"
                                :type="extra"
                            />
                        </div>
                    </div>
                </div>
                <div class="occasion__buttons p-grid">
                    <div class="p-col-12 p-offset-2 p-md-offset-0 p-md-4">
                        <button class="occasion__button occasion__button--tel">
                            <font-awesome-icon
                                icon="phone"
                                class="p-mr-4"
                            />Telefoon
                        </button>
                    </div>
                    <div class="p-col-12 p-offset-2 p-md-offset-0 p-md-4">
                        <button
                            @click="toggleDetails()"
                            class="occasion__button occasion__button--show"
                        >
                            {{ !showDetails ? "Bekijk meer" : "Bekijk minder" }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OccasionExtra from "./OccasionExtra";
export default {
    name: "Occasion",
    components: {
        OccasionExtra,
    },
    props: {
        occasion: {
            default: () => {},
            type: Object,
        },
    },
    data() {
        return {
            showDetails: false,
        };
    },
    computed: {
        occasionPrice() {
            return (
                this.occasion.price.toString().substr(0, 2) +
                "." +
                this.occasion.price.toString().substr(2)
            );
        },
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        },
    },
};
</script>

<style lang="scss">
.occasion {
    border: solid 1px #e0e0e0;
    border-radius: 10px;

    &__title {
        font-weight: bold;
        font-size: 24px;
    }

    &__content {
        display: flex;
    }

    &__content-image {
        border-radius: 10px;
        display: block;
        object-fit: cover;

        width: auto;
        height: auto;
    }

    &__content-favorite {
        font-size: 18px;
        font-weight: bold;
    }

    &__content-price {
        font-weight: bold;
        font-size: 24px;
    }

    &__specs {
        &--ul {
            list-style-type: none;
        }
        &--ul-left {
            padding: 0;
            font-weight: bold;
        }
    }

    &__button {
        border-radius: 10px;
        font-size: 18px;
        width: 100%;
        height: 100%;
        font-weight: bold;
        cursor: pointer;
        min-height: 40px;
        transition: all 0.3s;
        &--tel {
            background-color: white;
            border: 1px solid #2f80ec;
            color: #2f80ec;
        }
        &--tel:hover {
            background-color: #f0f0f0;
        }
        &--show {
            border: none;
            background-color: #2f80ec;
            color: white;
        }
        &--show:hover {
            background-color: #5e9df0;
        }
    }
}
</style>