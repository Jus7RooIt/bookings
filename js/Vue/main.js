const app = Vue.createApp({
    data() {
        return {
            newBookings: [],
            bookingId: 3,
             bookings: [{
                     name: 'Juan Perez',
                     id: 1,
                     date: '2019-03-01',
                     from: '10:00',
                     to: '12:00'
                 },
                 {
                     name: 'Mario Lopez',
                     id: 2,
                     date: '2019-03-01',
                     from: '11:00',
                     to: '11:30'
                 },
             ],
            // seteo valores iniciales para agilizar las pruebas
            name: 'prueba',
            date: '2019-03-01',
            from: '09:00',
            to: '10:00'
        }


    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.date === '' || this.from === '' || this.to === '') {
                alert('Ingrese todos los datos');
                return
            }
            if(this.to < this.from){
                alert('La hora de fin no puede ser menor a la hora de inicio');
                return
            }
            this.bookings.push({
                name: this.name,
                id: this.bookingId,
                date: this.date,
                from: this.from,
                to: this.to
            })

            items.add({
                id: this.bookingId,
                content: this.name,
                start: this.date + ' ' + this.from,
                end: this.date + ' ' + this.to,
                className: 'bg-warning'
            })
            this.selectBooking(this.bookingId)



            // this.name = ''
            // this.date = ''
            // this.from = ''
            // this.to = ''
            this.bookingId++
        },
        removeBooking(id) {
            if (confirm("desea eliminar la reserva?")) {

                this.bookings.forEach(booking => {
                    if (booking.id === id) {
                        
                        this.bookings.splice(this.bookings.indexOf(booking), 1)
                        items.remove(id)
                        return
                    }
                })
            }


        },
        selectBooking(id){
           
                timeline.setSelection([id], {
                  focus: true,
                });
             
        }
    },
    computed: {
        // bookings(){
        //     var aux = []
        //     console.log(items)
        //     items.forEach( item =>{
                
        //        var itemAux = {
        //             name: item.name,
        //             id: item.id,
        //             start: item.start,
        //             end: item.end
        //        }
        //        aux.add(itemAux)
        //     })
        //     return aux
        // },
        content() {
            return this.name
        },
        start() {
            return this.date + ' ' + this.from
        },
        end() {
            return this.date + ' ' + this.to
        }
        
    }


})