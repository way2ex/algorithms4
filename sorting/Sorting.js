class Sort {
  constructor(arr) {
    this.array = arr;
  }

  // bubble sorting
  bubbleSort() {
    let arr = this.array.slice();
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        arr[i] > arr[i+1] && this.exch(arr, i, i + 1);
      }
    }
    return arr;
  }

  // selection sort
  selectionSorting() {
    let arr = this.array.slice();
    for (let l = arr.length - 1, i = 0; i < l; i++) {
      let index = i;
      for (let j = i + 1; j <= l; j++) {
        arr[index] > arr[j] && (index = j);
      }
      this.exch(arr, i, index)
    }
    return arr;
  }
  // insertion sort
  insertionSorting() {
    let a = this.array.slice();
    for (let i = 1; i < a.length; i++) {
      let temp = a[i], j = i;
      for (j = i; j > 0 && a[j - 1] > temp; j--) {
        a[j] = a[j-1];
      }
      a[j] = temp;
    }
    return a;
  }
  // shell sort
  shellSorting() {
    let a = this.array.slice();
    let l = a.length, h = 1;
    while(h < l / 3) {
      h = h * 3 + 1; // 1 3 13 40 
    }
    while(h >= 1) {
      for (let i = h; i < l; i++) {
        let temp = a[i], j = i;
        for (j = i; j > 0 && a[j-h] > temp; j -= h) {
          a[j] = a[j-h]
        }
        a[j] = temp;
      }
      h = parseInt(h / 3);
    }
    return a;
  }
  // merge sorting 自顶向下
  UTBMergeSorting() {
    let a = this.array.slice();
    sort(a, 0, a.length - 1);

    return a;
    function sort(arr, lo, hi) {
      if (lo >= hi) {
        return;
      }
      let mid = lo + parseInt((hi - lo) / 2);
      sort(arr, lo, mid);
      sort(arr, mid + 1, hi);
      merge(arr, lo, mid, hi);
    }
    function merge(arr, lo, mid, hi) {
      let i = lo, j = mid + 1, aux = arr.slice();
      for (let k = lo; k <= hi; k++) {
        if (i > mid) {
          arr[k] = aux[j++];
        } else if (j > hi){
          arr[k] = aux[i++];
        } else if (aux[j] < aux[i]) {
          arr[k] = aux[j++];
        } else {
          arr[k] = aux[i++];
        }
      }
    }
  }
  // merge sorting 自底向上
  BTUMergeSorting() {
    let a = this.array.slice(), N = a.length;
    for (let sz = 1; sz < N; sz += sz ) {
      for (let lo = 0; lo < N - sz; lo += sz + sz) {
        this.merge(a, lo, lo+sz-1, Math.min(lo+sz+sz-1, N-1));
      }
    }
  }
  merge(arr, lo, mid, hi) {
    let i = lo, j = mid + 1, aux = arr.slice();
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        arr[k] = aux[j++];
      } else if (j > hi){
        arr[k] = aux[i++];
      } else if (aux[j] < aux[i]) {
        arr[k] = aux[j++];
      } else {
        arr[k] = aux[i++];
      }
    }
  }
  // compare
  compare(arr, i, j) {
    return arr[i] > arr[j];
  }
  // 交换顺序
  exch(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
}

var arr = [23,12,45,23,65,765,8687,343,23,1,4,76,453,653];
var sorting = new Sort(arr);
console.log(sorting.array.join(' '));
// console.log(sorting.bubbleSort().join(' '))
// console.log(sorting.selectionSorting().join(' '))
// console.log(sorting.insertionSorting().join(' '));
// console.log(sorting.shellSorting().join(' '));
console.log(sorting.UTBMergeSorting());