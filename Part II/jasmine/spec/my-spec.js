describe("Module", function() {
  it("should do something", function() {
    expect(true).toEqual(true);
  });
});

describe("String Join", function() {
	it("should handle seperating by spaces", function() {
		expect(join(["Hello","my","name","is","Rob"], " ")).toEqual("Hello my name is Rob")
	});

	it("should handle joining with commas", function() {
		expect(join(["cat","dog","bird"], ", ")).toEqual("cat, dog, bird")
	});

	it("should handle joining with 'and'", function() {
		expect(join([1,2,3,4,5], " and ")).toEqual("1 and 2 and 3 and 4 and 5")
	});
});

describe("Map function", function() {
	it("should be able to add one to each element in array", function() {
		expect( map([1,3,7,54,10], function(i){ return (i+1) } )).toEqual([2,4,8,55,11])
	})

	it("should be able to create strings using array", function() {
		expect( map([1,2,3], function(i){ return i + " is the loneliest number" } )).toEqual(['1 is the loneliest number','2 is the loneliest number','3 is the loneliest number'])
	})

	it("should be able to take length of strings in array", function() {
		expect( map(['dog', 'cat', 'bird'], function(i){ return (i.length) } )).toEqual([3,3,4])
	})
});

describe("Filter function", function() {
	it("should be able to filter strings longer than a value", function() {
		 expect( filter(["Hello",'car','tiger','marsupial','dog'], function(i){ if(i.length>3){return i}} )).toEqual(["Hello","tiger","marsupial"])
	})

	it("should be able to keep only truthy values", function() {
		expect( filter([0,2,"", null, undefined], function(i){ if(i != false){return i} } )).toEqual([2])
	})
});