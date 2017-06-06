import {Component} from 'angular2/core'
import {FormBuilder, ControlGroup} from 'angular2/common';
import {Observable, Error} from 'rxjs/Rx';

/**
 * Practice Observables
 *
 * @class ObservableComponent
 */
@Component({
  selector: 'observable',
  templateUrl: 'observable.template.html'
})
export class ObservableComponent {
  form: ControlGroup;

  /**
     * @constructor
     * @param {Function} formBuilder
     * Called when ObservableComponent is initialize
     */
  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      search: ['', , ]
    });

    var search = this.form.find('search');
    search.valueChanges
    .debounceTime(400)
    .map(str => (<string>str).replace(' ', '-'))
    .subscribe(x => console.log(x));

    Observable.fromArray([1, 2, 3]).take(3).subscribe(result => {
        console.log(result);
    })

    /*var observable = Observable.fromArray([1, 2, 3]);

    var startDates = [];
    var startDate = new Date();    //    Assuming    today    for    simplicity
    for (var day = -2; day <= 2; day++) {
       var date = new Date(
       startDate.getFullYear(),
       startDate.getMonth(),
       startDate.getDate() + day);
       startDates.push(date);
    }

    Observable
        .fromArray(startDates)
        .map(date => {
            console.log("Getting deals for date" + date);
            return [1, 2, 3]
        })
        .subscribe(x => console.log(x));

    Observable.empty();
    Observable.range(1, 5);
    Observable.fromArray([1, 2, 3]);
    Observable.of([1, 2, 3]);

    var observableAux = Observable.interval(1000);
    observableAux
    .flatMap(x => {
      console.log("calling    the    server    to    get    the    latest    news");
      return Observable.of([1, 2, 3]);
    })
    .subscribe(news => console.log(news));

*/
    // var userStream = Observable.of({
    //   userId: 1,
    //   username: 'mosh'
    // }).delay(2000);

    // var tweetStream = Observable.of([1, 2, 3]).delay(1500);


    // Observable
    //     .forkJoin(userStream, tweetStream)
    //     .map(joined => return new Object({user: joined[0], tweets: joined[1]}))
    //     .subscribe(
    //         result => console.log(result),
    //         error => console.log(error),
    //         () => console.log("Completed"
    //     );

/*
    var observableError = Observable.throw(new Error('Something Failed.'));

    observableError.subscribe(
        x => console.log(x),
        error => {
          console.log(error)
          // repite el observable 10 veces
          observableError.retry(10);
          // repite Indefinidamente
          observableError.retry();
    });

    var counter = 0;

    var ajaxCall = Observable.of('url').flatMap( _ => {
          if (++counter < 2)
            return Observable.throw(new Error('Request Failed'));

            return Observable.of([1, 2, 3]);
        });

     ajaxCall.subscribe(
        x => console.log(x),
        error => console.log(error)
      )

      ajaxCall.retry(3).subscribe(
        x => console.log(x),
        error => console.log(error)
      )

      var remoteDataStream = Observable.throw(new Error('Something failed.'));

      remoteDataStream
          .catch( err => {
            var localDataStream = Observable.of([1, 2, 3]);
            return localDataStream;
          })
          .subscribe(x => console.log(x));

      var dataStream = Observable.of([1, 2, 3]).delay(5000);

      Observable.throw(new Error("error"))
      Observable.fromArray([1, 2, 3])

      dataStream.timeout(1000).subscribe(
          x => console.log(x),
          error => console.error(error),
          () => console.log('completed')
      )
      */
  }
}
