<?php
/**
 *
 */

add_shortcode('menu-lite', 'menu_add_front');
function menu_add_front() {

		wp_enqueue_style( 'modal-lite', plugin_dir_url(dirname( __FILE__) ) . 'menu/assets/css/menu-lite.css' );
		wp_enqueue_script( 'modal-lite', plugin_dir_url(dirname( __FILE__) ) . 'menu/assets/js/menu-lite.js');
		?>
		<div class="" id="menuMobile">
			<div class="align-right">
				<i aria-hidden="true" id="times-menu" onclick="menuMobile()">&times;</i>
			</div>
			<ul>
				<li>
					menu 1
				</li>
				<li>
					menu 1
				</li>
				<li>
					menu 1
				</li>
			</ul>
		</div>
		<div id="burger-menu" class="">
			Menu
		</div>

		<div class="overlay" onclick="menuMobile()" id="menuOverlay"></div>
		<?php
}
