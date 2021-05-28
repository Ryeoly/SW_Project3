<template>
    <div id="app">
                    <v-layout wrap>
                        <v-flex xs3 md3>

                        </v-flex>
                    </v-layout>
    </div>
</template>

<script>
    export default {
        name: "search.vue",
        data () {
            return {
                model: null,
                product: null,
                category: null,
                purpose: null,

                categoriesPurposes: {
                    'Farm Animals':
                        ['cow', 'sheep', 'hen'],
                    'Directions':
                        ['left', 'right', 'up', 'down'],
                    'Time':
                        ['past', 'present', 'future'],
                    'Element':
                        ['air', 'water', 'tierra', 'fire']
                }
            }
        },
        computed: {
            categories() {
                return Object.keys(this.categoriesPurposes)
            },
            purposes() {
                if (!this.category) {
                    return null
                } else {
                    return this.categoriesPurposes[this.category]
                }
            }
        }
    }
</script>

<style scoped>

</style>
