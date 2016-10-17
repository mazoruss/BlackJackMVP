'use strict';

var Player = function Player(_ref) {
	var cards = _ref.cards;
	return React.createElement(
		'div',
		{ className: 'player' },
		cards.map(function (card) {
			return React.createElement(SingleCard, { card: card });
		})
	);
};

var SingleCard = function SingleCard(_ref2) {
	var card = _ref2.card;
	return React.createElement('img', { src: cardImgSrc[card] });
};

var Dealer = function Dealer(_ref3) {
	var cards = _ref3.cards;
	var reveal = _ref3.reveal;
	return React.createElement(
		'div',
		{ className: 'dealer' },
		cards.map(function (card, i) {
			return React.createElement(DealerCard, { card: card, index: i, reveal: reveal });
		})
	);
};

var DealerCard = function DealerCard(_ref4) {
	var card = _ref4.card;
	var index = _ref4.index;
	var reveal = _ref4.reveal;
	return React.createElement('img', { src: index === 0 && !reveal ? cardImgSrc['b'] : cardImgSrc[card] });
};

var Result = function Result(_ref5) {
	var bust = _ref5.bust;
	var winner = _ref5.winner;
	return React.createElement(
		'div',
		{ className: 'busted' },
		React.createElement(
			'span',
			null,
			bust ? 'BUSTED' : winner ? winner + ' WINS!' : ''
		)
	);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsImNhcmRzIiwibWFwIiwiY2FyZCIsIlNpbmdsZUNhcmQiLCJjYXJkSW1nU3JjIiwiRGVhbGVyIiwicmV2ZWFsIiwiaSIsIkRlYWxlckNhcmQiLCJpbmRleCIsIlJlc3VsdCIsImJ1c3QiLCJ3aW5uZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsS0FBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsUUFDWjtBQUFBO0FBQUEsSUFBSyxXQUFVLFFBQWY7QUFDRUEsUUFBTUMsR0FBTixDQUFVO0FBQUEsVUFDVixvQkFBQyxVQUFELElBQVksTUFBTUMsSUFBbEIsR0FEVTtBQUFBLEdBQVY7QUFERixFQURZO0FBQUEsQ0FBYjs7QUFRQSxJQUFJQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxLQUFFRCxJQUFGLFNBQUVBLElBQUY7QUFBQSxRQUNoQiw2QkFBSyxLQUFLRSxXQUFXRixJQUFYLENBQVYsR0FEZ0I7QUFBQSxDQUFqQjs7QUFJQSxJQUFJRyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxLQUFFTCxLQUFGLFNBQUVBLEtBQUY7QUFBQSxLQUFTTSxNQUFULFNBQVNBLE1BQVQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLFdBQVUsUUFBZjtBQUNFTixRQUFNQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPSyxDQUFQO0FBQUEsVUFDVixvQkFBQyxVQUFELElBQVksTUFBTUwsSUFBbEIsRUFBd0IsT0FBT0ssQ0FBL0IsRUFBa0MsUUFBUUQsTUFBMUMsR0FEVTtBQUFBLEdBQVY7QUFERixFQURZO0FBQUEsQ0FBYjs7QUFRQSxJQUFJRSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxLQUFFTixJQUFGLFNBQUVBLElBQUY7QUFBQSxLQUFRTyxLQUFSLFNBQVFBLEtBQVI7QUFBQSxLQUFlSCxNQUFmLFNBQWVBLE1BQWY7QUFBQSxRQUNoQiw2QkFBSyxLQUFLRyxVQUFVLENBQVYsSUFBZSxDQUFDSCxNQUFoQixHQUF5QkYsV0FBVyxHQUFYLENBQXpCLEdBQTJDQSxXQUFXRixJQUFYLENBQXJELEdBRGdCO0FBQUEsQ0FBakI7O0FBSUEsSUFBSVEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsS0FBRUMsSUFBRixTQUFFQSxJQUFGO0FBQUEsS0FBUUMsTUFBUixTQUFRQSxNQUFSO0FBQUEsUUFDWjtBQUFBO0FBQUEsSUFBSyxXQUFVLFFBQWY7QUFDQztBQUFBO0FBQUE7QUFBT0QsVUFBTyxRQUFQLEdBQWtCQyxTQUFTQSxTQUFTLFFBQWxCLEdBQTZCO0FBQXREO0FBREQsRUFEWTtBQUFBLENBQWIiLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQbGF5ZXIgPSAoe2NhcmRzfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT0ncGxheWVyJz5cblx0XHR7Y2FyZHMubWFwKGNhcmQgPT4gXG5cdFx0XHQ8U2luZ2xlQ2FyZCBjYXJkPXtjYXJkfSAvPlxuXHRcdCl9XG5cdDwvZGl2PlxuKVxuXG52YXIgU2luZ2xlQ2FyZCA9ICh7Y2FyZH0pID0+IChcblx0PGltZyBzcmM9e2NhcmRJbWdTcmNbY2FyZF19IC8+XG4pXG5cbnZhciBEZWFsZXIgPSAoe2NhcmRzLCByZXZlYWx9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdkZWFsZXInPlxuXHRcdHtjYXJkcy5tYXAoKGNhcmQsIGkpID0+IFxuXHRcdFx0PERlYWxlckNhcmQgY2FyZD17Y2FyZH0gaW5kZXg9e2l9IHJldmVhbD17cmV2ZWFsfSAvPlxuXHRcdCl9XG5cdDwvZGl2PlxuKVxuXG52YXIgRGVhbGVyQ2FyZCA9ICh7Y2FyZCwgaW5kZXgsIHJldmVhbH0pID0+IChcblx0PGltZyBzcmM9e2luZGV4ID09PSAwICYmICFyZXZlYWwgPyBjYXJkSW1nU3JjWydiJ10gOiBjYXJkSW1nU3JjW2NhcmRdfSAvPlxuKVxuXG52YXIgUmVzdWx0ID0gKHtidXN0LCB3aW5uZXJ9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPSdidXN0ZWQnPlxuXHRcdDxzcGFuPntidXN0ID8gJ0JVU1RFRCcgOiB3aW5uZXIgPyB3aW5uZXIgKyAnIFdJTlMhJyA6ICcnfTwvc3Bhbj5cblx0PC9kaXY+XG4pIl19