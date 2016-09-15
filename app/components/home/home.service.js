class HomeService {
	constructor($http) {
		this.$http = $http;
	}

	getPrice() {
		return this.$http.get('http://private-fe2a-scuptel.apiary-mock.com/ddd/pricing');
	}

	getDetails() {
		return this.$http.get('http://private-fe2a-scuptel.apiary-mock.com/ddd/details');
	}

	getPlans() {
		return this.$http.get('http://private-fe2a-scuptel.apiary-mock.com/plans');
	}
}

export default HomeService;