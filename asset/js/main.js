$( document ).ready( function () {
	// flicking main cursor

	function flick() {
		$( '#flickr_Cursor' ).addClass( 'flickrAnimation' );
	}

	flick();

	function ham() {
		$( '#hamToggle' ).click( function () {
			var windowWrap = $( '.window_wrap' );
			if ( windowWrap.css( "display" ) == "none" ) {
				$( '.window_wrap' ).animate().css( "display", "block" );
			} else {
				$( '.window_wrap' ).css( "display", "none" );
			}
		} );
	}

	ham();

	function cog() {
		var faCog = $( '.mainContainer_row ul li a' );
		$( faCog ).hover( function () {
			$( this ).children( ".fa-cog" ).addClass( 'fa-spin' );
		}, function () {
			$( this ).children( '.fa-cog' ).removeClass( 'fa-spin' );
		} );
	}

	cog();

	function nowClock() {
		var watch = $( '#nowWatch' );
		var nowDate = new Date();
		var hourAM_PM = 'AM';
		var nowYear = nowDate.getFullYear();
		var nowMonth = addPrefix( nowDate.getMonth() + 1, 2 );
		var nowDay = addPrefix( nowDate.getDate(), 2 );
		var nowHour = addPrefix( nowDate.getHours(), 2 );
		var nowMin = addPrefix( nowDate.getMinutes(), 2 );
		var nowSecond = addPrefix( nowDate.getSeconds(), 2 );

		if ( nowHour >= 12 ) {
			hourAM_PM = 'PM';
			nowDate = addPrefix( nowHour - 12, 2 );
		}

		watch.html( "First Login:" + " " + nowYear + "-" + nowMonth + "-" + nowDay + " " + nowHour + ":" + nowMin + ":" + nowSecond );

	}

	function addPrefix( num, digit ) {
		var zero_prefix = "";
		num = num.toString();
		if ( num.length < digit ) {
			for ( var i = 0; i < digit - num.length; i++ ) {
				zero_prefix += 0;
			}
		}
		return zero_prefix + num;
	};

	setInterval( nowClock, 1000 );

	var nav = $( '#selectTab > li' );
	var articles = $( '#section > article' );

	$( nav ).click( function () {
		var target = $( this );
		var indexs = target.index();
		var section = articles.eq( indexs );
		var offset = section.offset().top;

		$( 'html, body' ).animate( {scrollTop: offset}, 3000, "ease" );
	} );

} );
