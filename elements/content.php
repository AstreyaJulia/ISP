<!-- Основное содержимое -->
<main class="main-content <?php if (empty($_GET)) echo "dashboard"; ?>">
  <?php if ($info) echo "<p>$info</p>"; ?>
  <?= $content ?>
</main>
