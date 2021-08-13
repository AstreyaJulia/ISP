<!-- Основное содержимое -->
<main class="main-content <?php if (empty($_GET)) echo "dashboard"; ?>">
  <div class="content-wrapper">
  <!-- Контейнер алертов -->
  <!-- Пока что отключено. Мешает

  <div class="alert-container">
    <div class="row">
      <div class="alert show alert-danger alert-dismissible fade" role="alert">В 9:30 будет производиться обновление.
        Просьба выйти из всех картотек (БСР, СДП).
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
      </div>
      <div class="alert show alert-info alert-dismissible fade" role="alert">В 9:30 будет производиться обновление.
        Просьба выйти из всех картотек (БСР, СДП).
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
      </div>
      <div class="alert show alert-success alert-dismissible fade" role="alert"><h4 class="alert-heading">Отлично!</h4>
        <p>Ааа да, вы успешно прочитали это важное сообщение. Этот образец текста должен отображаться более длинным,
          чтобы вы увидели, как алерты работают с разным видом контента.</p>
        <hr>
        <p class="mb-0">Конечно, не забывайте про отступы margin.</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
      </div>
    </div>
  </div>
-->

  <?php if ($info) echo "<p>$info</p>"; ?>
  <?= $content ?>
  </div>
</main>
<!-- Контейнер для всплывашек -->
<div class="toasts-container">
  <div class="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <i class="mdi mdi-alert-circle-outline"></i>
      <strong class="me-auto"></strong> <small class="text-muted"></small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
    </div>
    <div class="toast-body"></div>
  </div>

</div>
