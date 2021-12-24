<?php
$sudo = $_COOKIE['aut']['sudo'];
$path = $host_api. $_SERVER['SERVER_NAME']. "/api/elements/sidebar.php?sudo=$sudo";
$ourData = file_get_contents($path);
$menu = json_decode($ourData);
?>
<!-- Сайдбар -->
<aside class="main-sidebar d-flex position-absolute flex-column">
  <div class="d-flex align-items-center justify-content-between p-3 border-bottom">
    <a class="d-flex align-items-center justify-content-center text-decoration-none logo">
      <img src="assets/img/logo/isp-logo.svg" alt="Лого" width="512" height="408"
           style="width: auto; height: 36px;">
    </a>
    <a class="d-flex align-items-center justify-content-center px-3 text-decoration-none sidebar-toggle-button"
       >
      <i class="mdi fs-4"></i>
    </a>
    <a class="d-flex align-items-center justify-content-center px-3 text-decoration-none sidebar-close-button">
      <i class="mdi fs-4 mdi-close"></i>
    </a>
  </div>
  <ul class="navigation-menu overlayscrollbar os-host-flexbox py-3 px-2 m-0 h-100">
    <?php foreach ($menu->data as $row => $key): ?>
          <li class="<?= empty($key->isfolder) ? 'menu-item' : 'menu-item with-sub' ?>">
          <a class="menu-link position-relative rounded-2 d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2" <?= isset($key->alias) ? 'href="'.$key->alias.'"' : '' ?>>
            <?= $key->icon ?>
            <span class="ms-2"><?= $key->pagetitle ?></span>
            <?= empty($key->isfolder) ? '' : '<i class="menu-arrow position-absolute mdi mdi-chevron-right"></i>' ?>
          </a>
    <?php if(isset($key->children)): ?>
    <?php foreach ($key->children as $value => $child): ?>
      <ul class="sub-menu mt-2 mx-0 mb-0 ps-0">
            <li class="submenu-item mb-2 p-0">
              <a class="submenu-link d-flex align-items-center w-100 py-2 px-3 position-relative m-0 text-decoration-none rounded-2" href="<?= $child->alias ?>">
                  <?= $child->icon ?>
                  <span class="ms-2"><?= $child->pagetitle ?></span>
              </a>
          </li>
        </ul>
    <?php endforeach ?>
    <?php endif ?>
      </li>
      <?php endforeach ?>
    </ul>
  <div class="sidebar-footer mb-0 mt-auto">
    <p class="footer-text">Сделано с <span><i class="mdi mdi-cards-heart"></i></span></p>
    <p class="footer-text">Сафоновский районный суд © <span><?= date('Y'); ?></span></p>
  </div>
</aside>
